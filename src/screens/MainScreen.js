import React from 'react';
import {View, StatusBar} from 'react-native'
import Header from "../components/Header";
import MapScreen from "./MapScreen";
import SelectedDestination from "../components/SelectedDestination";
import BottomDrawerMenu from "../components/BottomDrawerMenu";
import SelectPlanMenu from "../components/SelectPlanMenu";
import Search from "../components/Search";
import CarOrder from "../components/CarOrder";


const MainScreen = () => {
    return (
        <>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
            <View style={{flex: 1}}>
                <MapScreen/>
                <Header/>
                {/*<Search/>*/}
                {/*<BottomDrawerMenu/>*/}
                <SelectedDestination/>
                {/*<SelectPlanMenu/>*/}
                <CarOrder/>
            </View>
        </>
    );
};


export default MainScreen;