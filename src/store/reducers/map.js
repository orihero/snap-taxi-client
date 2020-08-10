import {GetCurrentLocation, SetDestination, SetDestinationDetails, SetMarkerPosition} from "../constants/map";

const initialState = {
    currentLocation: {
        latitude: 31.776685,
        longitude: 35.234491,
    },
    destination: null,
    marker: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  GetCurrentLocation.SUCCESS:
            return {
                ...state,
                currentLocation: action.payload,
                marker: action.payload
            };
        case SetDestination.SUCCESS:
            return {
                ...state,
                destination: action.payload
            };
        case SetDestinationDetails.SUCCESS:
            return {
                ...state,
                destination: {
                    ...state.destination,
                    details: action.payload,
                }
            };
        case SetMarkerPosition.SUCCESS:
            return {
                ...state,
                marker: action.payload
            };
        default:
            return state
    }
}
