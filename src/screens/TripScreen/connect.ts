import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import TripScreenController from './controller';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({
  booking: { current },
  app: { appState, isNetworkConnected },
}: RootState) => ({
  appState,
  isNetworkConnected,
  currentBooking: current,
});

const mapDispatch = ({
  map: { getDriverLocation },
  booking: { removeBooking, getCurrentBooking },
}: Dispatch) => ({
  removeBooking,
  getDriverLocation,
  getCurrentBooking,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(TripScreenController);
