import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import TripScreenView from "./view";


const TripScreenController = ({order, navigation}) => {

    useEffect(() => {
        if (order.status === undefined) {
            Alert.alert(
                'Внимание',
                'Ваш заказ был отменён'
            )
            navigation.reset({
                index: 0,
                routes: [{name: 'MainStack'}]
            })
        }
    }, [order.status]);


    return (
        <TripScreenView
            order={order}
            orderStatus={order.status}
        />
    );
};

export default TripScreenController;
