import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';

const mapState = ({
  loading,
  booking: { rates, quickComments },
  map: { currentLocationInfo, destinationInfo, distance, regionId },
}: RootState) => ({
  rates,
  distance,
  quickComments,
  regionId,
  destinationInfo,
  currentLocationInfo,
  isLoading: loading.effects.booking.bookCar,
});

import BookingPanelController from './controller';

const mapDispatch = ({
  booking: { bookCar, getRates },
  map: { setDestinationInfo, setDistance },
}: Dispatch) => ({
  bookCar,
  getRates,
  cancelDestination: () => {
    setDestinationInfo(null);
    setDistance(0);
  },
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(BookingPanelController);
