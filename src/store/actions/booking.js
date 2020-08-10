import {createAction} from "../utils";
import * as Booking from "../constants/booking";

const BookCar = createAction(Booking.BookCar.REQUEST);

export default {
    BookCar,
}
