import { connect } from 'react-redux';
import MyAddressesScreenController from './controller';
import { StackScreenProps } from '@react-navigation/stack';
import { RootState } from '@store/models';

const mapState = ({ user: { savedAddresses } }: RootState) => ({
  savedAddresses,
});

type StateProps = ReturnType<typeof mapState>;

export type Props = StateProps & StackScreenProps<any>;

export default connect(mapState)(MyAddressesScreenController);
