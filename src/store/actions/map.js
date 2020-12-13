import {createAction} from "../utils";
import * as Map from "../constants/map";

const GetCurrentLocation = createAction(Map.GetCurrentLocation.REQUEST);
const SetDestination = createAction(Map.SetDestination.REQUEST);
const SetDestinationDetails = createAction(Map.SetDestinationDetails.REQUEST);
const SetCurrentLocationDetails = createAction(Map.SetCurrentLocationDetails.REQUEST);
const SetMarkerPosition = createAction(Map.SetMarkerPosition.REQUEST);
const SetGoogleMarkerPosition = createAction(Map.SetGoogleMarkerPosition.SUCCESS);

export default {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
    SetMarkerPosition,
    SetCurrentLocationDetails,
    SetGoogleMarkerPosition,
}
