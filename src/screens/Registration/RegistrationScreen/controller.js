import React, {useState} from 'react';

import RegistrationScreenView from "./view";


const RegistrationScreenController = ({navigation, Login}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        setIsLoading(true);
        const normalizedPhone = '998' + phoneNumber.split(' ').join('');
        Login({
            phone: normalizedPhone,
            role: 'client'
        }, ({data}) => {
            setIsLoading(false);
            navigation.navigate('RegistrationConfirmation', {
                id: data.user_id,
            })
        }, () => {
            setIsLoading(false);
        })
    };
    return (
        <RegistrationScreenView
            handleSubmit={handleSubmit}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            isLoading={isLoading}
        />
    );
};

export default RegistrationScreenController;
