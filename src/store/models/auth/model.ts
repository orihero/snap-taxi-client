import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../utils/request';
import { API } from '@constants/API';
import {
  LoginPayload,
  LoginResponse,
  LoginVerifyPayload,
  LoginVerifyResponse,
} from './types';
import { initialState } from './state';
import { EffectPayload } from '@store/models/types';
import AsyncStorage from '@react-native-community/async-storage';

export const auth = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setLogin(state, login: LoginResponse) {
      return { ...state, login };
    },
  },
  effects: (dispatch) => ({
    async login({
      payload,
      errorCb,
      successCb,
    }: EffectPayload<LoginPayload, LoginResponse>) {
      try {
        const { data } = await request.post(API.LOGIN, payload);
        dispatch.auth.setLogin(data.data);
        successCb?.(data);
      } catch (e) {
        errorCb?.();
      }
    },
    async loginVerify(
      {
        payload,
        successCb,
        errorCb,
      }: EffectPayload<LoginVerifyPayload, LoginVerifyResponse>,
      state,
    ) {
      try {
        const { login } = state.auth;
        const { data } = await request.put<LoginVerifyResponse>(
          API.LOGIN_VERIFY + `/${login?.user_id}`,
          payload,
        );
        await AsyncStorage.setItem('token', data.data.token);
        request.defaults.headers.common['Authorization'] = data.data.token;
        await dispatch.user.getProfile({ payload: null });
        await dispatch.app.setAuthenticated(true);
      } catch (e) {
        errorCb?.();
        throw new Error(e);
      }
    },
    async smsResend(payload, state) {
      try {
        const {
          auth: { login },
        } = state;
        await request.put(API.SMS_RESEND + `/${login?.user_id}`);
      } catch (e) {}
    },
  }),
});
