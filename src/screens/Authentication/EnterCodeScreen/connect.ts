import { connect } from 'react-redux';
import { EnterCodeScreenController } from './controller';
import { Dispatch, RootState } from '@store/models';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ loading }: RootState) => ({
  isVerifyLoading: loading.effects.auth.loginVerify,
  isSMSResendLoading: loading.effects.auth.smsResend,
});

const mapDispatch = ({ auth: { loginVerify, smsResend } }: Dispatch) => ({
  smsResend,
  loginVerify,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;

export const EnterCodeScreenConnect = connect(
  mapState,
  mapDispatch,
)(EnterCodeScreenController);
