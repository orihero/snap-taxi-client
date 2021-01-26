import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import GetCurrentLocationButtonController from "./controller";
import {GetCurrentLocation} from "../../store/constants/map";


const mapDispatchToProps = dispatch => bindActionCreators({
    GetCurrentLocation: (payload) => ({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
}, dispatch);


export default connect(
    null,
    mapDispatchToProps
)(GetCurrentLocationButtonController);
