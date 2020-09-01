import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MapScreenController from "./controller";
import {SetDestinationDetails, SetMarkerPosition} from "../../store/constants/map";

const mapStateToProps = ({map}) => ({
    map,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    SetDestinationDetails: (payload) => ({
        type: SetDestinationDetails.SUCCESS,
        payload
    }),
    SetMarkerPosition: (payload) => ({
        type: SetMarkerPosition.SUCCESS,
        payload
    }),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreenController)
