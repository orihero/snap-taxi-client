import {createActionTypes} from "../utils";

const GetProfile = createActionTypes('GET_PROFILE');
const UpdateProfile = createActionTypes('UPDATE_PROFILE');
const SetPaymentMethod = createActionTypes('SET_PAYMENT_METHOD');

export {
    GetProfile,
    UpdateProfile,
    SetPaymentMethod,
}
