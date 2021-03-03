import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import CancelBookingController from './controller';

const mapState = ({
  map: { currentLocationInfo, destinationInfo },
  loading,
}: RootState) => ({
  destinationInfo,
  currentLocationInfo,
  isLoading: loading.effects.booking.cancelBooking,
});

const mapDispatch = ({ booking: { cancelBooking } }: Dispatch) => ({
  cancelBooking,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(CancelBookingController);
