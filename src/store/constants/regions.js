import {createActionTypes} from "../utils";

const GetRegions = createActionTypes('GET_REGIONS');
const SetRegionId = createActionTypes('SET_REGION_ID');

export {
    GetRegions,
    SetRegionId,
}
