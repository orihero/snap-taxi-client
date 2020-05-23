import React from 'react';
import {View} from 'react-native'
import MapScreen from "./MapScreen";
import Header from "../components/Header/Header";
import CarWaiting from "../components/CarWaiting/CarWaiting";


const CarWaitingScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <MapScreen/>
            <CarWaiting/>
        </View>
    );
};


export default CarWaitingScreen;
