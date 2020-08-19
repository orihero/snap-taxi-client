import {BookCar, ChangeOrderStatus, CancelOrder, RateOrder} from "../constants/booking";

const initialState = {
    order: {
        data: {}
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
        // case  CancelOrder.SUCCESS:
        //     return {
        //         ...state,
        //         order: {
        //             data: {}
        //         },
        //     };
        default:
            return state
    }
}
