import {combineReducers} from "redux";
import user from "./user";
import map from "./map";


const appReducer = combineReducers({
    user,
    map,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {}
    }

    return appReducer(state, action)
};


export default rootReducer;
