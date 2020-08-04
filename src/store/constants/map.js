import {createActionTypes} from "../utils";

const GetCurrentLocation = createActionTypes('GET_CURRENT_LOCATION');
const SetDestination = createActionTypes('SET_DESTINATION');

export {
    GetCurrentLocation,
    SetDestination,
}
