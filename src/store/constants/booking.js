import {createActionTypes} from "../utils";

const BookCar = createActionTypes('BOOK_CAR');
const ChangeOrderStatus = createActionTypes('CHANGE_ORDER_STATUS');
const CancelOrder = createActionTypes('CANCEL_ORDER');
const FinishOrder = createActionTypes('FINISH_ORDER');
const RateOrder = createActionTypes('RATE_ORDER');

export {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    FinishOrder,
    RateOrder,
}
