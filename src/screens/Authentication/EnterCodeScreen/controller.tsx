import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { onSmsListener } from '../../../helpers';
import { EnterCodeScreenView } from './view';
import { Props } from './connect';

export const EnterCodeScreenController = ({
  smsResend,
  loginVerify,
  isVerifyLoading,
  isSMSResendLoading,
}: Props) => {
  const [code, setCode] = useState<string>('');
  const [counter, setCounter] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [fcmToken, setFcmToken] = useState<string>('');

  useEffect(() => {
    if (!counter) return;

    const intervalId = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  useEffect(() => {
    if (code && code.length === 5) {
      handleSubmit();
    }
  }, [code]);

  useEffect(() => {
    PushNotification.configure({
      onRegister: (data: any) => {
        setFcmToken(data.token);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    onSmsListener(setCode);
  }, []);

  const handleSubmit = () => {
    loginVerify({
      payload: {
        code,
        fcm_token: fcmToken,
      },
      errorCb: () => {
        Alert.alert('Ошибка', 'Неправильный код подверждение');
        setIsLoading(false);
      },
    });
  };

  const resend = () => {
    setCounter(30);
    smsResend();
  };

  return (
    <EnterCodeScreenView
      handleSubmit={handleSubmit}
      resend={resend}
      code={code}
      counter={counter}
      setCode={setCode}
      isLoading={isVerifyLoading}
    />
  );
};
