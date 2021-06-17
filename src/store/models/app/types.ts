import { AppStateStatus } from 'react-native';

export type InitialState = {
  isNetworkConnected: boolean;
  isAuthenticated: boolean;
  isRouterLoaded: string | null;
  appState: AppStateStatus;
  language: 'ru' | 'en';
};
