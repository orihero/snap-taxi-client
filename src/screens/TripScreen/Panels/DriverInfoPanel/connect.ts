import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import DriverInfoPanelController from './controller';

const mapState = ({ booking: { current } }: RootState) => ({
  currentBooking: current,
});

const mapDispatch = ({ booking: { cancelBooking, sendPush } }: Dispatch) => ({
  sendPush,
  cancelBooking,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(DriverInfoPanelController);
