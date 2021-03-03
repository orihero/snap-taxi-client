import { connect } from 'react-redux';
import OrdersScreenController from './controller';
import { Dispatch, RootState } from '@store/models';

const mapState = ({ booking: { list }, loading }: RootState) => ({
  list,
  isLoading: loading.effects.booking.getList,
});

const mapDispatch = ({ booking: { getList } }: Dispatch) => ({
  getList,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(OrdersScreenController);
