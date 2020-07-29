import {createActionTypes} from "../utils";

const GetProfile = createActionTypes('GET_PROFILE');
const UpdateProfile = createActionTypes('UPDATE_PROFILE');

export {
    GetProfile,
    UpdateProfile,
}
