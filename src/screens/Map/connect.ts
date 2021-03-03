import { connect } from 'react-redux';
import { MapController } from './controller';
import { Dispatch, RootState } from '@store/models';
import MapView from 'react-native-maps';

const mapState = ({
  booking: { current },
  user: { currentLocation },
  map: {
    regions,
    driversAround,
    driverLocation,
    destinationInfo,
    isSelectingOnMap,
  },
}: RootState) => ({
  regions,
  driversAround,
  driverLocation,
  currentLocation,
  destinationInfo,
  isSelectingOnMap,
  currentBooking: current,
});

const mapDispatch = ({
  map: {
    setDistance,
    setRegionId,
    setMarkerInfo,
    getLocationData,
    getDriverLocation,
    getFullCurrentLocation,
  },
}: Dispatch) => ({
  setDistance,
  setRegionId,
  setMarkerInfo,
  getLocationData,
  getDriverLocation,
  getFullCurrentLocation,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

interface IProps {
  setMapRef: (ref: MapView) => void;
  mapRef: MapView | null;
}

export type Props = StateProps & DisPatchProps & IProps;

export const MapConnect = connect(mapState, mapDispatch)(MapController);
