import {createAction} from "../utils";
import * as Booking from "../constants/booking";

const BookCar = createAction(Booking.BookCar.REQUEST);
const ChangeOrderStatus = createAction(Booking.ChangeOrderStatus.REQUEST);
const CancelOrder = createAction(Booking.CancelOrder.REQUEST);
const FinishOrder = createAction(Booking.FinishOrder.REQUEST);
const RateOrder = createAction(Booking.RateOrder.REQUEST);
const GetOrderList = createAction(Booking.GetOrderList.REQUEST);
const GetDriversAround = createAction(Booking.GetDriversAround.REQUEST);
const SendPush = createAction(Booking.SendPush.REQUEST);
const GetOrderInfo = createAction(Booking.GetOrderInfo.REQUEST);

export default {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    FinishOrder,
    RateOrder,
    GetOrderList,
    GetDriversAround,
    SendPush,
    GetOrderInfo
}
