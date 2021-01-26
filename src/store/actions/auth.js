import {createAction} from "../utils";
import * as Auth from "../constants/auth";

const Login  = createAction(Auth.Login.REQUEST);
const VerifyCode  = createAction(Auth.VerifyCode.REQUEST);
const ResendCode  = createAction(Auth.ResendCode.REQUEST);

export default {
    Login,
    VerifyCode,
    ResendCode,
}
