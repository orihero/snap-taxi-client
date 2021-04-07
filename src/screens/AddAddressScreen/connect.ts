import { connect } from 'react-redux';
import AddAddressScreenController from './controller';
import { Dispatch, RootState } from '@store/models';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ loading }: RootState) => ({
  isLoading: loading.effects.user.saveAddress,
  isEditLoading: loading.effects.user.editSavedAddress,
  isDeleteLoading: loading.effects.user.deleteAddress,
});

const mapDispatch = ({
  user: { saveAddress, editSavedAddress, deleteAddress },
}: Dispatch) => ({
  saveAddress,
  deleteAddress,
  editSavedAddress,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(AddAddressScreenController);
