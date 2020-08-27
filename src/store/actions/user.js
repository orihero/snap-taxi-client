import {createAction} from "../utils";
import * as User from "../constants/user";

const GetProfile = createAction(User.GetProfile.REQUEST);
const UpdateProfile = createAction(User.UpdateProfile.REQUEST);
const SetPaymentMethod = createAction(User.SetPaymentMethod.SUCCESS);

export default {
    GetProfile,
    UpdateProfile,
    SetPaymentMethod,
}
