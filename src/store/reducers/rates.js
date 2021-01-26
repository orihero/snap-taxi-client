import {GetRates} from "../constants/rates";

const initialState = {
    isFetched: false,
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  GetRates.REQUEST:
            return {
                isFetched: false,
                data: []
            };
        case  GetRates.SUCCESS:
            return {
                isFetched: true,
                data: action.payload
            };
        case  GetRates.FAILURE:
            return {
                isFetched: true,
                data: []
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state
    }
}
