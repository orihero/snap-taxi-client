import { connect } from 'react-redux';
import GetCurrentLocationButtonController from './controller';
import { Dispatch, RootState } from '@store/models';
import MapView from 'react-native-maps';

const mapState = ({}: RootState) => ({});

const mapDispatch = ({}: Dispatch) => ({});

type StoreProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;

export type Props = StoreProps & DispatchProps & { mapRef: MapView };

export default connect(
  mapState,
  mapDispatch,
)(GetCurrentLocationButtonController);
