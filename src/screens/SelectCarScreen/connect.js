import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import SelectCarScreenController from "./controller";
import booking from "../../store/actions/booking";
import rates from "../../store/actions/rates";


const mapStateToProps = ({rates, map: {destination}}) => ({
    rates,
    destination
});

const mapDispatchToProps = dispatch => bindActionCreators({
    BookCar: booking.BookCar,
    GetRates: rates.GetRates,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCarScreenController);
