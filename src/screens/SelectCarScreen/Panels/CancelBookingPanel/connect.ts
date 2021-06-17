import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import CancelBookingController from './controller';
import MapView from 'react-native-maps';

const mapState = ({
  map: { currentLocationInfo, destinationInfo },
  user: { currentLocation },
  loading,
}: RootState) => ({
  destinationInfo,
  currentLocation,
  currentLocationInfo,
  isLoading: loading.effects.booking.cancelBooking,
});

const mapDispatch = ({ booking: { cancelBooking } }: Dispatch) => ({
  cancelBooking,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & { cancel: any };

export default connect(mapState, mapDispatch)(CancelBookingController);
