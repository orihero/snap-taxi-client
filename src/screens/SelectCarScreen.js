import React, {useState} from 'react';
import {View, Dimensions} from 'react-native'
import MapScreen from "./MapScreen";
import SelectedDestination from "../components/SelectedDestanation/SelectedDestination";
import SelectPlanMenu from "../components/SelectPlanMenu/SelectPlanMenu";
import Header from "../components/Header/Header";


const SelectCarScreen = ({navigation}) => {
    return (
        <>
            <View style={{flex: 1}}>
                <Header navigation={navigation} goBack={true}/>
                <MapScreen/>
                <SelectPlanMenu/>
            </View>
        </>
    );
};


export default SelectCarScreen;
