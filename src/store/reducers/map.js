import {GetCurrentLocation,SetDestination} from "../constants/map";

const initialState = {
    currentLocation: {
        latitude: 31.776685,
        longitude: 35.234491,
    },
    destination: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  GetCurrentLocation.SUCCESS:
            return {
                ...state,
                currentLocation: action.payload
            };
        case SetDestination.SUCCESS:
            return {
                ...state,
                destination: action.payload
            }
        default:
            return state
    }
}
