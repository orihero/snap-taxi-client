import {connect} from "react-redux";
import MainScreenController from "./controller";
import {GetCurrentLocation, SetDestination} from "../../store/constants/map";

const mapDispatchToProps = (dispatch) => ({
    SetDestination: () => dispatch({
        type: SetDestination.SUCCESS,
        payload: {}
    }),
});

export default connect(
    null,
    mapDispatchToProps
)(MainScreenController);
