import {
    BookCar,
    ChangeOrderStatus,
    CancelOrder,
    RateOrder,
    GetOrderList,
    GetDriversAround,
    SendPush,
    GetOrderInfo
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
            if (action.payload.status === 'canceled') {
                return {
                    ...state,
                    order: {
                        data: {}
                    },
                };
            } else {
                return {
                    ...state,
                    order: {
                        data: action.payload
                    },
                };
            }
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
        case GetOrderInfo.SUCCESS: {
            return {
                ...state,
                order: {
                    data: action.payload
                },
            }
        }
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
}
