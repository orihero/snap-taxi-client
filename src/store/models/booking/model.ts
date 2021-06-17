import { createModel } from '@rematch/core';
// @ts-ignore
import AsyncStorage from '@react-native-community/async-storage';
import io from 'socket.io-client';

import { RootModel } from '../models';
import { request } from '../utils/request';
import { API } from '@constants/API';
import {
  Booking,
  CarBookPayload,
  ChangeBookingStatusPayload,
  Comment,
  GetRatesPayload,
  Message,
  ReviewBookingPayload,
} from './types';
import { initialState } from './state';
import OrderStatus from '@constants/orderStatus';
import { EffectPayload } from '@store/models/types';
import { Rate } from '@store/models/user/types';
import Echo from 'laravel-echo';

var Sound = require('react-native-sound');

let echo: Echo | null = null;

export const booking = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setList(state, list: Booking[]) {
      return { ...state, list };
    },
    setCurrent(state, current: Booking | null) {
      return { ...state, current };
    },
    setRates(state, rates: Rate[]) {
      return { ...state, rates };
    },
    setChatMessage(state, message: Message) {
      return { ...state, chat: [...state.chat, message] };
    },
    clearChat(state) {
      return { ...state, chat: [] };
    },
    setQuickComments(state, quickComments: Comment[]) {
      return { ...state, quickComments };
    },
    markRead(state) {
      return {
        ...state,
        chat: state.chat.map((item) => ({
          ...item,
          read: true,
        })),
      };
    },
    setBookingStatus(state, current: Booking) {
      return {
        ...state,
        current,
      };
    },
  },
  effects: (dispatch) => ({
    async getRates(payload: GetRatesPayload, state) {
      try {
        const {
          map: { regionId },
        } = state;
        const { distance, ac_rate } = payload;
        const { data } = await request.get(
          API.GET_RATES +
            `?distance=${
              Math.ceil(distance * 10) / 10
            }&region_id=${regionId}&ac_rate=${ac_rate}`,
        );
        dispatch.booking.setRates(data.data);
      } catch (e) {
        throw new Error(e);
      }
    },
    async getList() {
      try {
        const { data } = await request.get(API.GET_BOOKING_LIST);
        dispatch.booking.setList(data.data);
      } catch (e) {
        throw new Error(e);
      }
    },
    async getSingle(id: number) {
      try {
        const { data } = await request.get(API.GET_BOOKING_SINGLE + `/${id}`);
        dispatch.booking.setCurrent(data.data);
      } catch (e) {
        throw new Error(e);
      }
    },
    async removeBooking() {
      try {
        echo?.disconnect();
        await AsyncStorage.removeItem('current');
        dispatch.map.setDestinationInfo(null);
        dispatch.map.setDriverLocation(null);
        dispatch.booking.setCurrent(null);
        dispatch.booking.clearChat();
        echo = null;
      } catch (e) {
        console.log(e);
      }
    },
    async bookCar(
      { payload, errorCb, successCb }: EffectPayload<CarBookPayload, any>,
      state,
    ) {
      try {
        const { map, user } = state;
        const routes = [
          {
            lat: user.currentLocation?.latitude.toString(),
            lng: user.currentLocation?.longitude.toString(),
            address: map.currentLocationInfo?.name ?? 'Не указано',
          },
        ];

        if (map.destinationInfo) {
          routes.push({
            lat: map.destinationInfo.coords.latitude.toString(),
            lng: map.destinationInfo.coords.longitude.toString(),
            address: map.destinationInfo.name,
          });
        }
        const { data } = await request.post(API.CAR_BOOKING, {
          ...payload,
          comment: payload.ac_rate
            ? 'Включитие кондиционер\n' + payload.comment
            : payload.comment,
          region_id: map.regionId,
          routes,
        });
        const echo = new Echo({
          host: 'https://snaptaxi.uz:6060',
          broadcaster: 'socket.io',
          client: io,
        });
        await echo
          .channel(`snaptaxi_database_car_order.${data.data.id}`)
          .listen('.OrderStatusEvent', (booking: any) => {
            this.socketEventHandler(booking);
          });
        dispatch.booking.setCurrent(data.data);
        AsyncStorage.setItem('current', JSON.stringify(data.data));
        successCb?.();
      } catch (e) {
        throw new Error(e);
      }
    },
    async socketEventHandler({ booking, channel, ...rest }: any) {
      try {
        dispatch.booking.setCurrent({
          ...booking,
          ...rest,
          channel,
          routes: booking.routes,
        });
        if (booking.status === OrderStatus.CANCELED) {
          echo = null;
        }
        if (
          booking.status === OrderStatus.ACCEPTED ||
          booking.status === OrderStatus.ARRIVED
        ) {
          const canceledSound = new Sound(
            'find_car.mp3',
            Sound.MAIN_BUNDLE,
            () => {
              if (canceledSound) {
                canceledSound.play();
              }
            },
          );
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    async getCurrentBooking() {
      try {
        const booking = await AsyncStorage.getItem('current');
        if (!!booking) {
          const parsedBooking: Booking = JSON.parse(booking as string);
          if (parsedBooking.status !== OrderStatus.RATING) {
            await dispatch.booking.getSingle(parsedBooking.id);
            const echo = await new Echo({
              host: 'https://snaptaxi.uz:6060',
              broadcaster: 'socket.io',
              client: io,
            });
            await echo
              .channel(`snaptaxi_database_car_order.${parsedBooking.id}`)
              .listen('.OrderStatusEvent', (booking: any) => {
                this.socketEventHandler(booking);
              });
          }
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    async changeBookingStatus(
      {
        payload,
        successCb,
        errorCb,
      }: EffectPayload<ChangeBookingStatusPayload, any>,
      state,
    ) {
      try {
        const { booking, user } = state;
        const { data } = await request.put(
          API.UPDATE_ORDER_STATUS + booking.current?.id,
          {
            driver_id: user.profile?.user_id,
            ...payload,
          },
        );

        if (payload.status !== OrderStatus.WAITING) {
          const canceledSound = new Sound(
            'find_car.mp3',
            Sound.MAIN_BUNDLE,
            () => {
              if (canceledSound) {
                canceledSound.play();
              }
            },
          );
        }
        await AsyncStorage.setItem('current', JSON.stringify(data.data));
        successCb?.();
        dispatch.booking.setCurrent(data.data);
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async cancelBooking(
      { errorCb, successCb }: EffectPayload<null, any>,
      state,
    ) {
      try {
        const { booking } = state;
        await request.put(API.UPDATE_ORDER_STATUS + booking.current?.id, {
          driver_id: booking.current?.driver_id,
          status: OrderStatus.CANCELED,
        });
        successCb?.();
        dispatch.booking.removeBooking();
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async sendPush(
      { payload, successCb, errorCb }: EffectPayload<any, any>,
      state,
    ) {
      try {
        const {
          booking: { current },
        } = state;
        await request.post(API.SEND_PUSH, {
          ...payload,
          user_id: current?.driver_id,
        });
        successCb?.();
      } catch (e) {
        throw new Error(e);
      }
    },
    async reviewBooking(
      { payload, successCb, errorCb }: EffectPayload<ReviewBookingPayload, any>,
      state,
    ) {
      try {
        const { current } = state.booking;
        await request.put(API.RATE_BOOKING + current?.id, payload);
        await successCb?.();
        await dispatch.booking.removeBooking();
        dispatch.user.getCurrentLocation({});
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async getQuickComments() {
      try {
        const { data } = await request.get(API.GET_QUICK_COMMENTS);
        dispatch.booking.setQuickComments(data.data);
      } catch (e) {
        throw new Error(e);
      }
    },
  }),
});
