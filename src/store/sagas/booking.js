import {put, takeLatest, call, all} from "redux-saga/effects";
import api from "../../services/api";
import io from "socket.io-client"
import Echo from "laravel-echo";

var Sound = require('react-native-sound');

import * as Booking from "../constants/booking";
import reactotron from "reactotron-react-native";

let echo: any = null;

function* BookCar(action) {
    try {

        echo = new Echo({
            host: 'https://snaptaxi.uz:6060',
            broadcaster: 'socket.io',
            client: io,
        });


        const {data} = yield call(api.request.post, '/car-booking/book', action.payload);

        echo
            .channel(`snaptaxi_database_car_order.${data.data.id}`)
            .listen('.OrderStatusEvent', ({booking, channel, ...rest}) => {
                console.log('shettaman')
                action.cb.socketCb({...booking, ...rest, channel});
                if (booking.status === 'accepted') {
                    const canceledSound = new Sound('find_car.mp3', Sound.MAIN_BUNDLE, () => {
                        if (canceledSound) {
                            canceledSound.play()
                        }
                    });
                    action.cb.actionCb();
                }
                if (booking.status === 'arrived') {
                    const canceledSound = new Sound('find_car.mp3', Sound.MAIN_BUNDLE, () => {
                        if (canceledSound) {
                            canceledSound.play()
                        }
                    });
                }
            });

        yield put({
            type: Booking.BookCar.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb.successCb, data)

    } catch (error) {
        yield put({
            type: Booking.BookCar.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* RateOrder(action: any) {
    try {

        const {orderId} = action.payload;

        const {data} = yield call(api.request.put, `/car-booking/review/${orderId}`, action.payload);

        echo.disconnect();

        yield put({
            type: Booking.RateOrder.SUCCESS,
            payload: data.data
        });

        yield call(action.cb);


    } catch (error) {

        yield put({
            type: Booking.RateOrder.FAILURE,
            payload: error,
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

        echo && echo.disconnect();
        echo = null;

        yield put({
            type: Booking.CancelOrder.SUCCESS,
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

function* GetOrderList(action: any) {
    try {
        const {data} = yield call(api.request.get, '/car-booking/client', action.payload);

        yield put({
            type: Booking.GetOrderList.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: Booking.GetOrderList.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* GetOrderInfo(action: any) {
    try {

        echo = new Echo({
            host: 'https://snaptaxi.uz:6060',
            broadcaster: 'socket.io',
            client: io,
        });

        const {data} = yield call(api.request.get, `/car-booking/details/${action.payload}`,);

        echo
            .channel(`snaptaxi_database_car_order.${action.payload}`)
            .listen('.OrderStatusEvent', ({booking, channel, ...rest}) => {
                action.cb({...booking, ...rest, channel});
            });

        yield put({
            type: Booking.GetOrderInfo.SUCCESS,
            payload: data.data,
        });

        yield call(action.cb, data.data);

    } catch (error) {
        yield put({
            type: Booking.GetOrderInfo.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* GetDriversAround(action: any) {
    try {

        const {latitude, longitude} = action.payload;

        const {data} = yield call(api.request.get, `/handbook/drivers-around?lat=${latitude}&lng=${longitude}`);

        yield put({
            type: Booking.GetDriversAround.SUCCESS,
            payload: data,
        });

        yield call(action.cb, data);

    } catch (error) {
        yield put({
            type: Booking.GetDriversAround.FAILURE,
            payload: error
        });

        yield call(action.errorCb, error);
    }
}

function* SendPush(action: any) {
    try {

        if (action.payload.user_id) {
            const {data} = yield call(api.request.post, '/car-booking/send-push', action.payload);
        }

        yield put({
            type: Booking.SendPush.SUCCESS,
            payload: {
                ...action.payload,
                id: Math.random(),
                type: 'send'
            }
        });

        yield call(action.cb);


    } catch (error) {

        yield put({
            type: Booking.SendPush.FAILURE,
            payload: error,
        });

        yield call(action.errorCb, error);
    }
}


export default function* root() {
    yield all([
        takeLatest(Booking.BookCar.REQUEST, BookCar),
        takeLatest(Booking.CancelOrder.REQUEST, CancelOrder),
        takeLatest(Booking.RateOrder.REQUEST, RateOrder),
        takeLatest(Booking.GetOrderList.REQUEST, GetOrderList),
        takeLatest(Booking.GetDriversAround.REQUEST, GetDriversAround),
        takeLatest(Booking.SendPush.REQUEST, SendPush),
        takeLatest(Booking.GetOrderInfo.REQUEST, GetOrderInfo),
    ]);
}
