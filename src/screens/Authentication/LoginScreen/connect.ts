import { connect } from 'react-redux';
import { LoginScreenController } from './controller';
import { Dispatch, RootState } from '@store/models';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ loading }: RootState) => ({
    isLoading: loading.effects.auth.login,
});

const mapDispatch = ({ auth: { login } }: Dispatch) => ({
    login,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps  & StackScreenProps<any> ;

export const LoginScreenConnect = connect(
    mapState,
    mapDispatch,
)(LoginScreenController);
