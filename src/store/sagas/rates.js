import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";

import * as Rates from "../constants/rates";

function* GetRates(action) {
    try {
        const {distance} = action.payload;

        const {data} = yield call(api.request.get, `/handbook/rates?distance=${distance}&region_id=1`);

        yield put({
            type: Rates.GetRates.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: Rates.GetRates.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Rates.GetRates.REQUEST, GetRates),
    ]);
}
