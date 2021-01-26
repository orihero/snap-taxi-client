import {connect} from "react-redux";
import MainScreenController from "./controller";
import user from "../../store/actions/user";
import {bindActionCreators} from "redux";

const mapStateToProps = ({user: {paymentMethod}}) => ({
    paymentMethod
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    SetPaymentMethod: user.SetPaymentMethod
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
