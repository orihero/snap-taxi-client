import {connect} from "react-redux";
import DestinationModalScreenController from "./controller";
import {SetDestination, SetMarkerPosition} from "../../store/constants/map";
import booking from "../../store/actions/booking";

const mapStateToProps = ({booking: {list}}) => ({
    bookings: list.data
});

const mapDispatchToProps = dispatch => ({
    SetDestination: (payload) => dispatch({
        type: SetDestination.SUCCESS,
        payload
    }),
    SetMarkerPosition: (payload) => dispatch({
        type: SetMarkerPosition.SUCCESS,
        payload
    }),
    GetOrderList: booking.GetOrderList
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DestinationModalScreenController)
