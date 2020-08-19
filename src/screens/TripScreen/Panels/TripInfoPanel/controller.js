import React from 'react';
import {useNavigation} from "@react-navigation/native";

import TripInfoPanelView from "./view";
import DriverInfoPanelView from "../DriverInfoPanel/view";


const TripInfoPanelController = ({order, CancelOrder}) => {

    const navigation = useNavigation();

    const cancelOrder = () => {
        navigation.navigate('Home');
        CancelOrder({
            orderId: order.id,
            driver_id: 28
        })
    };

    return (
        <TripInfoPanelView
            routes={JSON.parse(order.routes)}
            cancelOrder={cancelOrder}
            driver={order.driver}
            price={order.price}
        />
    );
};

export default TripInfoPanelController;
