import { connect } from 'react-redux';
import ChatScreenController from './controller';
import { Dispatch, RootState } from '@store/models';

const mapState = ({ booking: { chat }, loading }: RootState) => ({
  chat,
  isLoading: loading.effects.booking.sendPush,
});

const mapDispatch = ({
  booking: { sendPush, setChatMessage, markRead },
}: Dispatch) => ({
  sendPush,
  markRead,
  setChatMessage,
});

type StoreProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;

export type Props = StoreProps & DispatchProps;

export default connect(mapState, mapDispatch)(ChatScreenController);
