import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import MapScreenController from "./controller";
import {SetDestinationDetails, SetMarkerPosition} from "../../store/constants/map";
import map from "../../store/actions/map";

const mapStateToProps = ({map, booking: {order}}) => ({
    map,
    order
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
    SetGoogleMarkerPosition: map.SetGoogleMarkerPosition
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapScreenController)
