import {VerifyCode} from "../constants/auth";
import {GetProfile, UpdateProfile} from "../constants/user";

const initialState = {
    token: null,
    isAuthenticated: false,
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  VerifyCode.SUCCESS:
            const {token} = action.payload;
            return {
                ...state,
                token: token,
                isAuthenticated: false,
                data: []
            };
        case  GetProfile.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                data: action.payload
            };
        case  UpdateProfile.SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}
