import { createModel } from '@rematch/core';
import { AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { RootModel } from '../models';
import { initialState } from './state';
import { request } from '../utils/request';
import { localization } from '../../../services/Localization';
import SplashScreen from 'react-native-splash-screen';

export const app = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setNetworkConnection(state, isNetworkConnected: boolean) {
      return { ...state, isNetworkConnected };
    },
    setAuthenticated(state, isAuthenticated: boolean) {
      return { ...state, isAuthenticated };
    },
    setIsRouterLoaded(state, isRouterLoaded: string | null) {
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
        dispatch.handling.initApp();
        const token = await AsyncStorage.getItem('token');
        const language =
          (await AsyncStorage.getItem('language')) || initialState.language;
        localization.setLanguage(language);
        await dispatch.user.getCurrentLocation({});
        if (!!token) {
          const profile = await AsyncStorage.getItem('profile');
          const router = await AsyncStorage.getItem('router');
          await dispatch.app.setIsRouterLoaded(router);
          !!profile && dispatch.user.setProfile(JSON.parse(profile));
          request.defaults.headers.common['Authorization'] = token;
          await dispatch.app.setAuthenticated(true);
          await dispatch.booking.getCurrentBooking();
          await dispatch.user.getProfile({ payload: null });
          await dispatch.app.getHandBooks();
        }
      } catch (e) {
        dispatch.handling.setInitAppError(true);
        throw new Error(e);
      } finally {
        SplashScreen.hide();
        dispatch.handling.setInitApp(false);
      }
    },
    async getHandBooks() {
      try {
        dispatch.handling.handbooks();
        await dispatch.user.getSavedAddresses();
        await dispatch.map.getRegions();
        await dispatch.booking.getQuickComments();
        await dispatch.user.getNotifications();
      } catch (e) {
        dispatch.handling.setHandbooksError(true);
      } finally {
        dispatch.handling.setHandbooks(false);
      }
    },
    async changeAppLanguage(language: 'ru' | 'en') {
      try {
        SplashScreen.show();
        dispatch.handling.changeAppLanguage();
        await AsyncStorage.setItem('language', language);
        dispatch.app.setAppLanguage(language);
        localization.setLanguage(language);
      } catch (e) {
        dispatch.handling.setChangeAppLanguageError(true);
      } finally {
        SplashScreen.hide();
        dispatch.handling.setChangeAppLanguage(false);
      }
    },
    async logout() {
      try {
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('profile');
        AsyncStorage.removeItem('current');
        AsyncStorage.removeItem('router');
        dispatch.app.setAuthenticated(false);
      } catch (e) {
        throw new Error(e);
      }
    },
  }),
});
