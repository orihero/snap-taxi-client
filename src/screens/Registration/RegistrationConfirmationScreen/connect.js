import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import auth from "../../../store/actions/auth";
import user from "../../../store/actions/user";
import RegistrationConfirmationScreenController from "./controller";
import booking from "../../../store/actions/booking";

const mapDispatchToProps = dispatch => bindActionCreators({
    VerifyCode: auth.VerifyCode,
    ResendCode: auth.ResendCode,
    GetProfile: user.GetProfile,
    SendPush: booking.SendPush
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(RegistrationConfirmationScreenController);
