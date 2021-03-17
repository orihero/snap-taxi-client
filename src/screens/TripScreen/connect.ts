import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import TripScreenController from './controller';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ booking: { current } }: RootState) => ({
  currentBooking: current,
});

const mapDispatch = ({
  map: { getDriverLocation },
  booking: { removeBooking },
}: Dispatch) => ({
  removeBooking,
  getDriverLocation,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(TripScreenController);
