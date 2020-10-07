import React, {useEffect, useState} from 'react';
import MyTripsScreenView from "./view";
import {StatusBar} from "react-native";
import Colors from "../../assets/styles/Colors";


const OrdersScreenController = ({navigation, orderList, GetOrderList}) => {

        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(Colors.blue);
            navigation.addListener('focus', () => {
                setIsLoading(true);
                GetOrderList({}, () => setIsLoading(false), () => setIsLoading(false))
            })
        }, []);

        return (
            <MyTripsScreenView
                orderList={orderList}
                isLoading={isLoading}
            />
        );
    }
;

export default OrdersScreenController;
