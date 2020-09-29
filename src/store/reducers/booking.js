import {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    RateOrder,
    GetOrderList,
    GetDriversAround,
    SendPush
} from "../constants/booking";
import {uniqBy} from "lodash"

const initialState = {
    order: {
        data: {}
    },
    list: {
        data: []
    },
    drivers: [],
    messages: {
        data: [],
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  BookCar.SUCCESS:
            return {
                ...state,
                order: {
                    data: action.payload
                },
            };
        case  ChangeOrderStatus.SUCCESS:
            return {
                ...state,
                order: {
                    data: action.payload
                },
            };
        case  RateOrder.SUCCESS:
            return {
                ...state,
                order: {
                    data: {}
                },
            };
        case  CancelOrder.SUCCESS:
            return {
                ...state,
                order: {
                    data: {}
                },
            };
        case GetOrderList.SUCCESS:
            return {
                ...state,
                list: {
                    data: action.payload
                },
            };
        case GetDriversAround.SUCCESS:
            return {
                ...state,
                drivers: action.payload
            };
        case SendPush.SUCCESS: {
            return {
                ...state,
                messages: {
                    data: uniqBy([...state.messages.data, action.payload], 'id')
                },
            }
        }
        default:
            return state
    }
}
