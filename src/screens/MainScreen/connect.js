import {connect} from "react-redux";
import MainScreenController from "./controller";
import {GetCurrentLocation, SetDestination} from "../../store/constants/map";

const mapDispatchToProps = (dispatch) => ({
    GetCurrentLocation: (payload) => dispatch({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
    SetDestination: () => dispatch({
        type: SetDestination.SUCCESS,
        payload: null
    })
});

export default connect(
    null,
    mapDispatchToProps
)(MainScreenController);
