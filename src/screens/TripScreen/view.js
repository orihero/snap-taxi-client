import React from 'react';
import {View} from 'react-native'

import styles from "./styles";
import MapScreen from "../MapScreen";
import Header from "../../components/Header/Header";
import DriverInfoPanel from "./Panels/DriverInfoPanel";
import TripInfoPanel from "./Panels/TripInfoPanel";


const TripScreenView = ({navigation, orderStatus}) => {
    const renderPanel = () => {
        if (orderStatus === 'accepted') {
            return <TripInfoPanel/>
        } else {
            return <DriverInfoPanel/>
        }
    };

    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <MapScreen/>
            {renderPanel(orderStatus)}
        </View>
    );
};


export default TripScreenView;
