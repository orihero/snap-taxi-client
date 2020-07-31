import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import MainScreenController from "./controller";

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(MainScreenController);
