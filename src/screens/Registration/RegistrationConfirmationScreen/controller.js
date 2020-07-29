import React, {useState, useEffect} from 'react';
import RegistrationConfirmationScreenView from "./view";

const RegistrationConfirmationScreenController = ({route, VerifyCode, ResendCode, GetProfile}) => {

    const [code, setCode] = useState();
    const [counter, setCounter] = useState(30);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!counter) return;

        const intervalId = setInterval(() => {
            setCounter(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [counter]);

    const handleSubmit = () => {
        setIsLoading(true);
        const {id} = route.params;
        VerifyCode({
            id,
            code
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
        setCounter(30);
        ResendCode(id, ({data}) => {
            setIsLoading(false);
        }, (error) => {
            console.log(error)
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
