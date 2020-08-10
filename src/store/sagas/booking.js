import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";

import * as Booking from "../constants/booking";

function* BookCar(action) {
    try {
        const {data} = yield call(api.request.post, '/car-booking/book', action.payload);

        yield put({
            type: Booking.BookCar.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);
    } catch (error) {
        yield put({
            type: Booking.BookCar.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Booking.BookCar.REQUEST, BookCar),
    ]);
}
