import React, {useEffect, useState} from 'react';
import MyTripsScreenView from "./view";
import Colors from "../../assets/styles/Colors";


const OrdersScreenController = ({navigation, orderList, GetOrderList}) => {

        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
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
