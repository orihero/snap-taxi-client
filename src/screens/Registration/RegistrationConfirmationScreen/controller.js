import React, {useState, useEffect} from 'react';

var PushNotification = require('react-native-push-notification');
import RegistrationConfirmationScreenView from "./view";
import SmsRetriever from "react-native-sms-retriever";

const RegistrationConfirmationScreenController = ({route, VerifyCode, ResendCode, GetProfile, SendPush}) => {

    const [code, setCode] = useState();
    const [counter, setCounter] = useState(60);
    const [isLoading, setIsLoading] = useState(false);
    const [fcmToken, setFcmToken] = useState(null);

    useEffect(() => {
        if (!counter) return;

        const intervalId = setInterval(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [counter]);

    useEffect(() => {
        PushNotification.configure({
            onRegister: (data: any) => {
                setFcmToken(data.token)
            },
            onNotification: (notification: any) => {
                if (notification.title === "message") {
                    SendPush({
                        id: notification.data.notification_id,
                        message: notification.message,
                        type: 'driver',
                    })
                }
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

    _onSmsListenerPressed = async () => {
        try {
            const registered = await SmsRetriever.startSmsRetriever();
            if (registered) {
                SmsRetriever.addSmsListener(event => {
                    console.log(event.message);
                    SmsRetriever.removeSmsListener();
                });
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    };

    const handleSubmit = () => {
        setIsLoading(true);
        const {id} = route.params;
        VerifyCode({
            id,
            code,
            fcm_token: fcmToken
        }, () => {
            GetProfile(null, () => {
                setIsLoading(false);
            });
        }, () => {
            setIsLoading(false);
        });
    };

    const resend = () => {
        const {id} = route.params;
        setCounter(60);
        ResendCode(id, ({data}) => {
            setIsLoading(false);
        }, (error) => {
            setIsLoading(false);
        })
    };

    return (
        <RegistrationConfirmationScreenView
            handleSubmit={handleSubmit}
            resend={resend}
            counter={counter}
            setCode={setCode}
            isLoading={isLoading}
        />
    );
};

export default RegistrationConfirmationScreenController;
