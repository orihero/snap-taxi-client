import { connect } from 'react-redux';
import { Dispatch, RootState } from '@store/models';
import SelectLocationPanelController from './controller';

const mapState = ({ map: { isSelectingOnMap }, loading }: RootState) => ({
  isSelectingOnMap,
  isLoading: loading.effects.map.getLocationData,
});

const mapDispatch = ({}: Dispatch) => ({});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

interface IProps {
  addressInfo: any;
  setAddress: (addressInfo: any) => void;
}

export type Props = StateProps & DisPatchProps & IProps;

export default connect(mapState, mapDispatch)(SelectLocationPanelController);
