import {combineReducers} from "redux";
import user from "./user";
import map from "./map";
import rates from "./rates";


const appReducer = combineReducers({
    user,
    map,
    rates
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {}
    }

    return appReducer(state, action)
};


export default rootReducer;
