import {createActionTypes} from "../utils";

const BookCar = createActionTypes('BOOK_CAR');
const ChangeOrderStatus = createActionTypes('CHANGE_ORDER_STATUS');
const CancelOrder = createActionTypes('CANCEL_ORDER');
const FinishOrder = createActionTypes('FINISH_ORDER');
const RateOrder = createActionTypes('RATE_ORDER');
const GetOrderList = createActionTypes('GET_ORDER_LIST');
const GetDriversAround = createActionTypes('GET_DRIVERS_AROUND');
const SendPush = createActionTypes('SEND_PUSH');

export {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    FinishOrder,
    RateOrder,
    GetOrderList,
    GetDriversAround,
    SendPush,
}
