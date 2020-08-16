import {BookCar, ChangeOrderStatus, CancelOrder} from "../constants/booking";

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
