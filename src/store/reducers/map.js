import {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
    SetMarkerPosition,
    SetCurrentLocationDetails,
    SetGoogleMarkerPosition
} from "../constants/map";
import {VerifyCode} from "../constants/auth";

const initialState = {
    currentLocation: {
        details: {},
        coords: {},
    },
    googleMarker: {},
    destination: {},
    marker: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  VerifyCode.SUCCESS:
            return {
                ...state,
                currentLocation: {
                    details: {},
                    coords: {},
                },
            };
        case  GetCurrentLocation.SUCCESS:
            return {
                ...state,
                currentLocation: {
                    ...state.currentLocation,
                    coords: action.payload,
                },
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
        case SetGoogleMarkerPosition.SUCCESS:
            return {
                ...state,
                googleMarker: action.payload
            };
        default:
            return state
    }
}
