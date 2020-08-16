import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import DriverInfoPanelController from "./controller";
import booking from "../../../../store/actions/booking";

const mapStateToProps = ({booking: {order}}) => ({
    order: order.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    CancelOrder: booking.CancelOrder,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DriverInfoPanelController);
