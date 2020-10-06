import {connect} from "react-redux";
import MainScreenController from "./controller";
import {GetCurrentLocation, SetCurrentLocationDetails, SetDestination} from "../../store/constants/map";
import {SendPush} from "../../store/constants/booking";
import Booking from '../../store/actions/booking';
import {bindActionCreators} from "redux";

const mapStateToProps = ({map: {marker}, booking: {order}, user: {language}}) => ({
    marker,
    order: order.data,
    language
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetDriversAround: Booking.GetDriversAround,
    ChangeOrderStatus: Booking.ChangeOrderStatus,
    GetOrderInfo: Booking.GetOrderInfo,
    SetDestination: () => ({
        type: SetDestination.SUCCESS,
        payload: {}
    }),
    SetCurrentLocationDetails: (payload) => ({
        type: SetCurrentLocationDetails.SUCCESS,
        payload
    }),
    GetCurrentLocation: (payload) => ({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
    SendPush: (payload) => ({
        type: SendPush.SUCCESS,
        payload
    })
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
