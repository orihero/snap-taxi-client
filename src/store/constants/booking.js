import {createActionTypes} from "../utils";

const BookCar = createActionTypes('BOOK_CAR');
const ChangeOrderStatus = createActionTypes('CHANGE_ORDER_STATUS');
const CancelOrder = createActionTypes('CANCEL_ORDER');

export {
    BookCar,
    ChangeOrderStatus,
    CancelOrder
}
