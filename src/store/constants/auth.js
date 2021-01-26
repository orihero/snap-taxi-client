import {createActionTypes} from "../utils";

const Login = createActionTypes('LOGIN');
const VerifyCode = createActionTypes('VERIFY_CODE');
const ResendCode = createActionTypes('RESEND_CODE');

export {
    Login,
    VerifyCode,
    ResendCode,
}
