import {ORDER} from "../constants/Taxi";

const initialState = {
    isFetched: false,
    waiting: false,
    data: {},
};

const taxi = (state = initialState, action) => {
    switch (action.type) {
        case ORDER.SUCCESS: {
            return {
                ...state,
                data: [],
                isFetched: true,
            }
        }
        case ORDER.FULFILL: {
            return {
                ...state,
                data: [],
                isFetched: true,
                waiting: true
            }
        }
        default:
            return state
    }
};

export default taxi
