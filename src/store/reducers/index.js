import {combineReducers} from "redux";
import user from "./user";
import map from "./map";
import rates from "./rates";
import booking from "./booking";
import regions from "./regions";


const appReducer = combineReducers({
    user,
    map,
    rates,
    booking,
    regions,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};


export default rootReducer;
