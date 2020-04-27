import {ADDRESS} from "../constants/Address";

const initialState = {
    isFetched: false,
    data: {},
};

const address = (state = initialState, action) => {
    switch (action.type) {
        case ADDRESS.SUCCESS: {
            return {
                ...state,
                data: [],
                isFetched: true
            }
        }
        default:
            return state
    }
};

export default address
