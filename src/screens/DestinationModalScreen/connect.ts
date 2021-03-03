import { connect } from 'react-redux';
import DestinationModalScreenController from './controller';
import { Dispatch, RootState } from '@store/models';

const mapState = ({
  map: { currentLocationInfo, destinationInfo },
}: RootState) => ({
  destinationInfo,
  currentLocationInfo,
});

const mapDispatch = ({
  map: {
    searchLocation,
    setIsSelectingOnMap,
    setDestinationInfo,
    setCurrentLocationInfo,
  },
  user: { setCurrentLocation },
}: Dispatch) => ({
  searchLocation,
  setDestinationInfo,
  setCurrentLocation,
  setIsSelectingOnMap,
  setCurrentLocationInfo,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps &
  DisPatchProps & {
    visible: boolean;
    closeModal: () => void;
  };

export default connect(mapState, mapDispatch)(DestinationModalScreenController);
