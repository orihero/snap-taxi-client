import {createActionTypes} from "../utils";

const GetCurrentLocation = createActionTypes('GET_CURRENT_LOCATION');
const SetDestination = createActionTypes('SET_DESTINATION');
const SetDestinationDetails = createActionTypes('SET_DESTINATION_DETAILS');
const SetCurrentLocationDetails = createActionTypes('SET_CURRENT_LOCATION_DETAILS');
const SetMarkerPosition = createActionTypes('SET_MARKER_POSITION');
const SetGoogleMarkerPosition = createActionTypes('SET_GOOGLE_MARKER_POSITION');

export {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
    SetMarkerPosition,
    SetCurrentLocationDetails,
    SetGoogleMarkerPosition,
}
