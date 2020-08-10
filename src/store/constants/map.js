import {createActionTypes} from "../utils";

const GetCurrentLocation = createActionTypes('GET_CURRENT_LOCATION');
const SetDestination = createActionTypes('SET_DESTINATION');
const SetDestinationDetails = createActionTypes('SET_DESTINATION_DETAILS');

export {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
}
