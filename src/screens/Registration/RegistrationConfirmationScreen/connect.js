import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import auth from "../../../store/actions/auth";
import user from "../../../store/actions/user";
import RegistrationConfirmationScreenController from "./controller";

const mapDispatchToProps = dispatch => bindActionCreators({
    VerifyCode: auth.VerifyCode,
    ResendCode: auth.ResendCode,
    GetProfile: user.GetProfile
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(RegistrationConfirmationScreenController);
