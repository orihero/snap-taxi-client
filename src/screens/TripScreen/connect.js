import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import booking from '../../store/actions/booking';
import TripScreenController from './controller';
import { ChangeOrderStatus } from '../../store/constants/booking';

const mapStateToProps = ({ booking: { order } }) => ({
  order: order.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ChangeOrderStatus: (payload, cb) => ({
        type: ChangeOrderStatus.SUCCESS,
        payload,
        cb,
      }),
      GetOrderInfo: booking.GetOrderInfo,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TripScreenController);
