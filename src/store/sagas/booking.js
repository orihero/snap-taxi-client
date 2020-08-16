import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";
import io from "socket.io-client"
import Echo from "laravel-echo";

import * as Booking from "../constants/booking";

let echo: any;

function* BookCar(action) {
    try {
        const {data} = yield call(api.request.post, '/car-booking/book', action.payload);

        echo = new Echo({
            host: 'http://snap.vroom.uz:6060',
            broadcaster: 'socket.io',
            client: io,
        });

        echo
            .channel(`snaptaxi_database_car_order.${data.data.id}`)
            .listen('.OrderStatusEvent', ({booking, channel}) => {
                action.cb.socketCb({...booking, channel});
                if (booking.status === 'accepted') {
                    action.cb.actionCb();
                }
            });


        yield put({
            type: Booking.BookCar.SUCCESS,
            payload: data.data,
        });


    } catch (error) {
        yield put({
            type: Booking.BookCar.FAILURE,
            payload: error
        });
        yield call(action.errorCb, error);
    }
}

function* CancelOrder(action: any) {
    try {

        const {driverId, orderId} = action.payload;

        const {data} = yield call(api.request.put, `/car-booking/status/${orderId}`, {
            status: 'canceled',
            driver_id: driverId,
        });

        echo.disconnect();

        yield put({
            type: Booking.CancelOrder.SUCCESS,
            payload: data.data
        });

        yield call(action.cb);

    } catch (error) {

        yield put({
            type: Booking.CancelOrder.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Booking.BookCar.REQUEST, BookCar),
        takeLatest(Booking.CancelOrder.REQUEST, CancelOrder),
    ]);
}
