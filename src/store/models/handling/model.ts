import { createModel } from '@rematch/core';

import { RootModel } from '../models';
import { initialState } from './state';

export const handling = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setInitApp(state, initApp: boolean) {
      return { ...state, app: { ...state.app, initApp } };
    },
    setInitAppError(state, initAppError: boolean) {
      return { ...state, app: { ...state.app, initAppError } };
    },
    setChangeAppLanguage(state, changeAppLanguage: boolean) {
      return { ...state, app: { ...state.app, changeAppLanguage } };
    },
    setChangeAppLanguageError(state, changeAppLanguageError: boolean) {
      return { ...state, app: { ...state.app, changeAppLanguageError } };
    },
    setHandbooks(state, handbooks: boolean) {
      return { ...state, app: { ...state.app, handbooks } };
    },
    setHandbooksError(state, handbooksError: boolean) {
      return { ...state, app: { ...state.app, handbooksError } };
    },
  },
  effects: (dispatch) => ({
    initApp() {
      dispatch.handling.setInitApp(true);
      dispatch.handling.setInitAppError(false);
    },
    changeAppLanguage() {
      dispatch.handling.setChangeAppLanguage(true);
      dispatch.handling.setChangeAppLanguageError(false);
    },
    handbooks() {
      dispatch.handling.setHandbooks(false);
      dispatch.handling.setHandbooksError(false);
    },
  }),
});
