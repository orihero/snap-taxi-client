import {createAction} from "../utils";
import * as Regions from "../constants/regions";

const GetRegions = createAction(Regions.GetRegions.REQUEST);
const SetRegionId = createAction(Regions.SetRegionId.SUCCESS);

export default {
    GetRegions,
    SetRegionId,
}
