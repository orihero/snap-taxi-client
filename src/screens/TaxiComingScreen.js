import React from 'react';
import {View} from 'react-native'
import MapScreen from "./MapScreen";
import Header from "../components/Header";
import CarOrder from "../components/CarOrder";


const TaxiComingScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation} goBack={true}/>
            <MapScreen/>
            <CarOrder/>
        </View>
    );
};


export default TaxiComingScreen;
