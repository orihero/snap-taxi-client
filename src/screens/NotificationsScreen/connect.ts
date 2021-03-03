import { connect } from 'react-redux';
import NotificationsScreenController from './controller';
import { Dispatch, RootState } from '@store/models';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ user: { notifications } }: RootState) => ({
  notifications,
});

const mapDispatch = ({ user: { markNotificationsRead } }: Dispatch) => ({
  markNotificationsRead,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export default connect(mapState, mapDispatch)(NotificationsScreenController);
