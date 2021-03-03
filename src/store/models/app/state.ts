import { InitialState } from './types';

export const initialState: InitialState = {
  isNetworkConnected: false,
  isAuthenticated: false,
  isRouterLoaded: false,
  appState: 'inactive',
  language: 'ru',
};
