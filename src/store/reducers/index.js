import {combineReducers} from "redux";
import user from "./user";
import map from "./map";
import rates from "./rates";
import booking from "./booking";


const appReducer = combineReducers({
    user,
    map,
    rates,
    booking
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};


export default rootReducer;
