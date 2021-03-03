import { createModel } from '@rematch/core';
import { AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { RootModel } from '../models';
import { initialState } from './state';
import { request } from '../utils/request';
import { localization } from '../../../services/Localization';

export const app = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setNetworkConnection(state, isNetworkConnected: boolean) {
      return { ...state, isNetworkConnected };
    },
    setAuthenticated(state, isAuthenticated: boolean) {
      return { ...state, isAuthenticated };
    },
    setIsRouterLoaded(state, isRouterLoaded: boolean) {
      return { ...state, isRouterLoaded };
    },
    setAppState(state, appState: AppStateStatus) {
      return { ...state, appState };
    },
    setAppLanguage(state, language: 'ru' | 'en') {
      return { ...state, language };
    },
  },
  effects: (dispatch) => ({
    async initApp() {
      try {
        const token = await AsyncStorage.getItem('token');
        const language =
          (await AsyncStorage.getItem('language')) || initialState.language;
        localization.setLanguage(language);
        await dispatch.user.getCurrentLocation({});
        if (!!token) {
          const profile = await AsyncStorage.getItem('profile');
          !!profile && dispatch.user.setProfile(JSON.parse(profile));
          request.defaults.headers.common['Authorization'] = token;
          dispatch.app.setAuthenticated(true);
          await dispatch.map.getRegions();
          await dispatch.user.getProfile({ payload: null });
          await dispatch.booking.getCurrentBooking();
          await dispatch.user.getNotifications();
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    async changeAppLanguage(language: 'ru' | 'en') {
      try {
        await AsyncStorage.setItem('language', language);
        dispatch.app.setAppLanguage(language);
        localization.setLanguage(language);
      } catch (e) {
        throw new Error(e);
      }
    },
    async logout() {
      try {
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('profile');
        AsyncStorage.removeItem('current');
        dispatch.app.setAuthenticated(false);
      } catch (e) {
        throw new Error(e);
      }
    },
  }),
});
