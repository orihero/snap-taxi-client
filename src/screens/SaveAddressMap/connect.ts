import { connect } from 'react-redux';
import { SaveAddressMapScreenController } from './controller';
import { Dispatch, RootState } from '@store/models';
import MapView from 'react-native-maps';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ user: { currentLocation } }: RootState) => ({
  currentLocation,
});

const mapDispatch = ({ map: { getLocationData } }: Dispatch) => ({
  getLocationData,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

interface IProps {
  setMapRef: (ref: MapView) => void;
  mapRef: MapView | null;
}

export type Props = StateProps & DisPatchProps & IProps & StackScreenProps<any>;

export const SaveAddressMapScreenConnect = connect(
  mapState,
  mapDispatch,
)(SaveAddressMapScreenController);
