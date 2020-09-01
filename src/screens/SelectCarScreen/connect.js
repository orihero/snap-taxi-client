import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SelectCarScreenController from "./controller";
import booking from "../../store/actions/booking";
import rates from "../../store/actions/rates";
import {GetCurrentLocation, SetCurrentLocationDetails} from "../../store/constants/map";
import {ChangeOrderStatus} from "../../store/constants/booking";


const mapStateToProps = ({rates, map: {destination, marker}, user: {paymentMethod}, booking: {order}}) => ({
    rates,
    destination,
    marker,
    paymentMethod,
    order: order.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
    BookCar: booking.BookCar,
    GetRates: rates.GetRates,
    CancelOrder: booking.CancelOrder,
    GetCurrentLocation: (payload) => dispatch({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
    ChangeOrderStatus: (payload) => ({
        type: ChangeOrderStatus.SUCCESS,
        payload
    }),
    SetCurrentLocationDetails: (payload) => ({
        type: SetCurrentLocationDetails.SUCCESS,
        payload
    })
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCarScreenController);
