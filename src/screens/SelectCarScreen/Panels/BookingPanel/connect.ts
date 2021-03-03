import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';

const mapState = ({
  loading,
  booking: { rates },
  map: { currentLocationInfo, destinationInfo, distance },
}: RootState) => ({
  rates,
  distance,
  destinationInfo,
  currentLocationInfo,
  isLoading: loading.effects.booking.bookCar,
});

import BookingPanelController from './controller';

const mapDispatch = ({ booking: { bookCar, getRates } }: Dispatch) => ({
  bookCar,
  getRates,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(BookingPanelController);
