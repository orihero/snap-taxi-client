import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import MainScreenController from './controller';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({
  map: { currentLocationInfo },
  booking: { current },
}: RootState) => ({
  currentLocationInfo,
  currentBooking: current,
});

const mapDispatch = ({ booking: { removeBooking } }: Dispatch) => ({
  removeBooking,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(MainScreenController);
