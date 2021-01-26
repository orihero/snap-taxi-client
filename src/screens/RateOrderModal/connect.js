import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RateOrderModalController from "./controller";
import booking from "../../store/actions/booking";

const mapStateToProps = ({booking: {order}}) => ({
    order: order.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    RateOrder: booking.RateOrder,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RateOrderModalController);
