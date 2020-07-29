import {combineReducers} from "redux";
import user from "./user";


const appReducer = combineReducers({
    user
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = {}
    }

    return appReducer(state, action)
};


export default rootReducer;
