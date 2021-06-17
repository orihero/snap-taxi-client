import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';

const mapState = ({
  loading,
  booking: { rates, quickComments, list },
  map: { currentLocationInfo, destinationInfo, distance, regionId },
  user: { savedAddresses },
}: RootState) => ({
  rates,
  distance,
  quickComments,
  regionId,
  destinationInfo,
  bookingList: list
    .filter((item) => item.routes.length == 2)
    .map((item) => ({
      id: 0,
      user_id: 0,
      title: item.routes[1].address,
      address: item.routes[1].address,
      lat: item.routes[1].lat,
      lng: item.routes[1].lng,
    }))
    .concat(savedAddresses),
  currentLocationInfo,
  isLoading: loading.effects.booking.bookCar,
  isRatesLoading: loading.effects.booking.getRates,
});

import BookingPanelController from './controller';
import MapView from 'react-native-maps';

const mapDispatch = ({
  booking: { bookCar, getRates },
  map: { setDestinationInfo, setDistance },
}: Dispatch) => ({
  bookCar,
  getRates,
  setDestinationInfo,
  cancelDestination: () => {
    setDestinationInfo(null);
    setDistance(0);
  },
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & { mapRef: MapView };

export default connect(mapState, mapDispatch)(BookingPanelController);
