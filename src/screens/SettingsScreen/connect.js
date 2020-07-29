import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SettingsScreenController from "./controller";
import user from "../../store/actions/user";


const mapStateToProps = ({user}) => ({
    user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    UpdateProfile: user.UpdateProfile,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsScreenController);
