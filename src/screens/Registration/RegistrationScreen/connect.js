import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import auth from "../../../store/actions/auth";
import RegistrationScreenController from "./controller";

const mapDispatchToProps = (dispatch) => bindActionCreators({
    Login: auth.Login
}, dispatch);

export default connect(null, mapDispatchToProps)(RegistrationScreenController);
