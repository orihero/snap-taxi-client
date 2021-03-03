import { createModel } from '@rematch/core';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import { RootModel } from '../models';
import { request } from '../utils/request';
import { API } from '@constants/API';
import { User, Notification } from './types';
import { initialState } from './state';
import { EffectPayload } from '@store/models/types';
import { Region } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';

export const user = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setProfile(state, profile: User) {
      return { ...state, profile };
    },
    setNotifications(state, notifications: Notification[]) {
      return { ...state, notifications };
    },
    markRead(state) {
      return {
        ...state,
        notifications: state.notifications.map((item) => ({
          ...item,
          read: true,
        })),
      };
    },
    setCurrentLocation(state, currentLocation: GeoCoordinates | Region) {
      return { ...state, currentLocation };
    },
  },
  effects: (dispatch) => ({
    async getProfile({ successCb, errorCb }: EffectPayload<any, any>) {
      try {
        const { data } = await request.get(API.GET_PROFILE);
        dispatch.user.setProfile(data.data);
        AsyncStorage.setItem('profile', JSON.stringify(data.data));
        successCb?.();
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async updateProfile({
      successCb,
      errorCb,
      payload,
    }: EffectPayload<any, any>) {
      try {
        const { data } = await request.post(API.UPDATE_PROFILE, payload);
        dispatch.user.setProfile(data.data);
        AsyncStorage.setItem('profile', JSON.stringify(data.data));
        successCb?.();
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async getNotifications() {
      try {
        const { data } = await request.get(API.GET_NOTIFICATIONS);
        dispatch.user.setNotifications(data.data);
      } catch (e) {}
    },
    async markNotificationsRead() {
      try {
        await request.get(API.MARK_NOTIFICATIONS_READ);
        dispatch.user.markRead();
      } catch (e) {
        console.log(e);
      }
    },
    async getCurrentLocation({
      successCb,
    }: {
      successCb?: ({ latitude, longitude }: any) => void;
    }) {
      Geolocation.getCurrentPosition(
        (data) => {
          const coords = data.coords;
          const { latitude, longitude } = coords;
          successCb?.({ latitude, longitude });
          dispatch.user.setCurrentLocation(data.coords);
          dispatch.map.getLocationData({
            payload: { longitude, latitude },
            successCb: (data) => dispatch.map.setCurrentLocationInfo(data),
          });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 15000,
          maximumAge: 10000,
          forceRequestLocation: true,
        },
      );
    },
  }),
});
