import {bindActionCreators} from "redux";
import {connect,} from "react-redux";

import booking from "../../store/actions/booking";
import OrdersScreenController from "./controller";

const mapStateToProps = ({booking: {list}}: any) => ({
    orderList: list.data
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        GetOrderList: booking.GetOrderList,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersScreenController);
