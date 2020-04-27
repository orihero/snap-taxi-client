import {combineReducers} from "redux";
import address from "./address";
import taxi from "./taxi";

const rootReducer = combineReducers({
    address,
    taxi
});

export default rootReducer

