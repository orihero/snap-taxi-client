import { createModel } from '@rematch/core';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import { RootModel } from '../models';
import { request } from '../utils/request';
import { API } from '@constants/API';
import {
  User,
  Notification,
  Address,
  AddressPayload,
  EditAddressPayload,
} from './types';
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
    setSavedAddresses(state, savedAddresses: Address[]) {
      return { ...state, savedAddresses };
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
          if (successCb) {
            successCb({ latitude, longitude });
          }
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
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          forceRequestLocation: true,
        },
      );
    },
    async getSavedAddresses() {
      try {
        const { data } = await request.get(API.GET_SAVED_ADDRESSES);
        const normalized = data.data.map((address: Address) => ({
          ...address,
          lat: +address.lat,
          lng: +address.lng,
        }));
        dispatch.user.setSavedAddresses(normalized);
      } catch (e) {
        console.log(e);
      }
    },
    async saveAddress({
      successCb,
      errorCb,
      payload,
    }: EffectPayload<AddressPayload, any>) {
      try {
        await request.post(API.GET_SAVED_ADDRESSES, payload);
        await dispatch.user.getSavedAddresses();

        successCb?.();
      } catch (e) {
        console.log(e);
      }
    },
    async editSavedAddress({
      successCb,
      errorCb,
      payload,
    }: EffectPayload<EditAddressPayload, any>) {
      try {
        await request.put(
          API.GET_SAVED_ADDRESSES + `/${payload.id}`,
          payload.data,
        );
        await dispatch.user.getSavedAddresses();
        successCb?.();
      } catch (e) {
        console.log(e);
      }
    },
    async deleteAddress({
      successCb,
      errorCb,
      payload,
    }: EffectPayload<any, any>) {
      try {
        await request.delete(API.GET_SAVED_ADDRESSES + `/${payload}`);
        await dispatch.user.getSavedAddresses();
        successCb?.();
      } catch (e) {
        console.log(e);
      }
    },
  }),
});
