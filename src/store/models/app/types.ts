import { AppStateStatus } from 'react-native';

export type InitialState = {
  isNetworkConnected: boolean;
  isAuthenticated: boolean;
  isRouterLoaded: boolean;
  appState: AppStateStatus;
  language: 'ru' | 'en';
};
