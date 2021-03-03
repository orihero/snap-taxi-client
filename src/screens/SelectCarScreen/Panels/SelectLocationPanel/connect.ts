import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import SelectLocationPanelController from './controller';

const mapState = ({
  map: { isSelectingOnMap, markerInfo },
  loading,
}: RootState) => ({
  markerInfo,
  isSelectingOnMap,
  isLoading: loading.effects.map.getLocationData,
});

const mapDispatch = ({
  map: { setIsSelectingOnMap, setDestinationInfo },
}: Dispatch) => ({
  setDestinationInfo,
  setIsSelectingOnMap,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(SelectLocationPanelController);
