import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import TripScreenController from "./controller";

const mapStateToProps = ({booking: {order}}) => ({
    order: order.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripScreenController);
