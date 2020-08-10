import {createAction} from "../utils";
import * as Rates from "../constants/rates";

const GetRates = createAction(Rates.GetRates.REQUEST);

export default {
    GetRates,
}
