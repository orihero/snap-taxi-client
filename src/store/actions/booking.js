import {createAction} from "../utils";
import * as Booking from "../constants/booking";

const BookCar = createAction(Booking.BookCar.REQUEST);
const ChangeOrderStatus = createAction(Booking.ChangeOrderStatus.REQUEST);
const CancelOrder = createAction(Booking.CancelOrder.REQUEST);
const FinishOrder = createAction(Booking.FinishOrder.REQUEST);
const RateOrder = createAction(Booking.RateOrder.REQUEST);

export default {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    FinishOrder,
    RateOrder
}
