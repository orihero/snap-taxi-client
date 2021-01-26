import React, {useState, useEffect} from 'react';

import PaymentMethodScreenView from "./view";

const PaymentMethodScreenController = ({navigation, paymentMethod, SetPaymentMethod}) => {

    const routeTo = (route) => () => {
        navigation.navigate(route)
    };

    const setPaymentMethod = (method) => () => {
        SetPaymentMethod(method)
    };

    return (
        <PaymentMethodScreenView
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
            routeTo={routeTo}
        />
    );
};

export default PaymentMethodScreenController;
