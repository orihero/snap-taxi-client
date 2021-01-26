import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";

import * as Auth from "../constants/auth";

function* Login(action) {
    try {
        const {data} = yield call(api.request.post, '/auth/login', action.payload);

        yield put({
            type: Auth.Login.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: Auth.Login.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* VerifyCode(action) {
    try {
        const {data} = yield call(api.request.put, `/auth/login-verify/${action.payload.id}`, action.payload);

        yield put({
            type: Auth.VerifyCode.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: Auth.VerifyCode.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error.response);
    }
}

function* ResendCode(action) {
    try {
        const {data} = yield call(api.request.put, `/auth/sms-resend/${action.payload}`);

        yield put({
            type: Auth.ResendCode.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: Auth.ResendCode.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error.response);
    }
}


export default function* root() {
    yield all([
        takeLatest(Auth.Login.REQUEST, Login),
        takeLatest(Auth.VerifyCode.REQUEST, VerifyCode),
        takeLatest(Auth.ResendCode.REQUEST, ResendCode),
    ]);
}
