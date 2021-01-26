import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';
import RegistrationConfirmationScreenView from './view';
import SmsRetriever from 'react-native-sms-retriever';

const RegistrationConfirmationScreenController = ({
  route,
  VerifyCode,
  ResendCode,
  GetProfile,
}) => {
  const [code, setCode] = useState();
  const [counter, setCounter] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [fcmToken, setFcmToken] = useState(null);

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

    _onSmsListenerPressed();
  }, []);

  const _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        await SmsRetriever.addSmsListener((event) => {
          if (event.message) {
            setCode(event.message.split(':')[1].slice(1, 6));
            return SmsRetriever.removeSmsListener();
          }
        });
      }
    } catch (error) {}
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const { id } = route.params;
    VerifyCode(
      {
        id,
        code,
        fcm_token: fcmToken,
      },
      () => {
        GetProfile(null, () => {
          setIsLoading(false);
        });
      },
      () => {
        Alert.alert('Ошибка', 'Неправильный код подверждение');
        setIsLoading(false);
      },
    );
  };

  const resend = () => {
    const { id } = route.params;
    setCounter(60);
    ResendCode(
      id,
      ({ data }) => {
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
      },
    );
  };

  return (
    <RegistrationConfirmationScreenView
      handleSubmit={handleSubmit}
      resend={resend}
      code={code}
      counter={counter}
      setCode={setCode}
      isLoading={isLoading}
    />
  );
};

export default RegistrationConfirmationScreenController;
