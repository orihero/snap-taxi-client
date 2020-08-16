import {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
    SetMarkerPosition,
    SetCurrentLocationDetails
} from "../constants/map";

const initialState = {
    currentLocation: {
        details: {},
        coords: {
            latitude: 31.776685,
            longitude: 35.234491,
        }
    },
    destination: {},
    marker: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  GetCurrentLocation.SUCCESS:
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    coords: action.payload,
                },
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
        case SetCurrentLocationDetails.SUCCESS:
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    details: action.payload
                },
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
