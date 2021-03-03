import { connect } from 'react-redux';
import { CustomMarkerController } from './controller';
import { Dispatch, RootState } from '@store/models';

const mapState = ({ user: { currentLocation }, loading }: RootState) => ({
  currentLocation,
  isLoading: loading.effects.map.getFullCurrentLocation,
});

const mapDispatch = ({ user: { setCurrentLocation } }: Dispatch) => ({
  setCurrentLocation,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & { mapHeight: number };

export const CustomMarkerConnect = connect(
  mapState,
  mapDispatch,
)(CustomMarkerController);
