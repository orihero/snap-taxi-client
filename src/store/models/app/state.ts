import { InitialState } from './types';

export const initialState: InitialState = {
  isNetworkConnected: false,
  isAuthenticated: false,
  isRouterLoaded: null,
  appState: 'inactive',
  language: 'ru',
};
