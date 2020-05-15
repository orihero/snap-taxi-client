import React, {useState} from 'react';
import {View, Dimensions} from 'react-native'
import MapScreen from "./MapScreen";
import SelectedDestination from "../components/SelectedDestination";
import SelectPlanMenu from "../components/SelectPlanMenu";
import Header from "../components/Header";


const SelectCarScreen = ({navigation}) => {
    return (
        <>
            <View style={{flex: 1}}>
                <Header navigation={navigation} goBack={true}/>
                <MapScreen/>
                <SelectedDestination/>
                <SelectPlanMenu/>
                {/*{isTaxiOrdered && !isTaxiWaiting && <CarOrder/>}*/}
                {/*{isTaxiWaiting && <CarWaiting/>}*/}
            </View>
        </>
    );
};



export default SelectCarScreen;
