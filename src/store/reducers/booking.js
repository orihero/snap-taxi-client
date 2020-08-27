import {BookCar, ChangeOrderStatus, CancelOrder, RateOrder, GetOrderList} from "../constants/booking";

const initialState = {
    order: {
        data: {}
    },
    list: {
        data: []
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
        case GetOrderList.SUCCESS: {
            return {
                ...state,
                list: {
                    data: action.payload
                },
            }
        }
        default:
            return state
    }
}
