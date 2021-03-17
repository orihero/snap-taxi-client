import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import SelectCarScreenController from './controller';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({
  booking: { current },
  user: { currentLocation },
  map: { isSelectingOnMap },
}: RootState) => ({
  currentLocation,
  isSelectingOnMap,
  currentBooking: current,
});

const mapDispatch = ({
  booking: { setCurrent, cancelBooking, setBookingStatus },
  map: { setDestinationInfo, setIsSelectingOnMap, setDistance },
}: Dispatch) => ({
  setCurrent,
  setDistance,
  cancelBooking,
  setBookingStatus,
  setDestinationInfo,
  setIsSelectingOnMap,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(SelectCarScreenController);
