import React, {useState} from 'react';
import {View} from 'react-native'

import styles from "./styles";
import MapScreen from "../MapScreen";
import Header from "../../components/Header/Header";
import DriverInfoPanel from "./Panels/DriverInfoPanel";
import TripInfoPanel from "./Panels/TripInfoPanel";
import RateOrderModal from "../RateOrderModal";


const TripScreenView = ({navigation, orderStatus, order}) => {

    const [mapRef, setMapRef] = useState();

    const renderPanel = () => {
        if (orderStatus === 'accepted') {
            return <TripInfoPanel/>
        } else if(orderStatus !== 'canceled') {
            return <DriverInfoPanel/>
        }
    };

    return (
        <>
            <RateOrderModal/>
            <View style={styles.container}>
                {
                    orderStatus !== 'done' && Object.keys(order).length > 0 &&
                    <>
                        <Header navigation={navigation}/>
                        {renderPanel(orderStatus)}
                    </>
                }
                <MapScreen
                    showMarker={false}
                    mapRef={mapRef}
                    setMapRef={setMapRef}
                />
            </View>
        </>
    );
};


export default TripScreenView;
