import {createAction} from "../utils";
import * as Map from "../constants/map";

const GetCurrentLocation = createAction(Map.GetCurrentLocation.REQUEST);
const SetDestination = createAction(Map.SetDestination.REQUEST);

export default {
    GetCurrentLocation,
    SetDestination
}
