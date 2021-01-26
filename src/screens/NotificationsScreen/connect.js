import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import NotificationsScreenController from "./controller";
import user from "../../store/actions/user";

const mapStateToProps = ({user: {notifications}}) => ({
    notifications: notifications.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    GetNotifications: user.GetNotifications
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsScreenController)
