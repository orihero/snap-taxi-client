import React, {useEffect} from 'react';
import MyTripsScreenView from "./view";
import {StatusBar} from "react-native";
import Colors from "../../assets/styles/Colors";


const OrdersScreenController = ({navigation, orderList, GetOrderList}) => {

        useEffect(() => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(Colors.blue);
            GetOrderList()
        }, [navigation]);

        return (
            <MyTripsScreenView
                orderList={orderList}
            />
        );
    }
;

export default OrdersScreenController;
