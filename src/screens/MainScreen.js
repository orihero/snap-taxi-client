import React from 'react';
import {View, StatusBar} from 'react-native'
import MapScreen from "./MapScreen";
import {useIsDrawerOpen} from '@react-navigation/drawer';
import SelectedDestination from "../components/SelectedDestination";
import BottomDrawerMenu from "../components/BottomDrawerMenu";
import SelectPlanMenu from "../components/SelectPlanMenu";
import Search from "../components/Search";
import CarOrder from "../components/CarOrder";
import CarWaiting from "../components/CarWaiting";



const MainScreen = () => {
    const isDrawerOpen = useIsDrawerOpen();
    return (
        <>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
            <View style={{flex: 1}}>
                <MapScreen/>
                {/*<Header/>*/}
                {/*<Search/>*/}
                {/*<BottomDrawerMenu/>*/}
                {/*<SelectedDestination/>*/}
                {/*<SelectPlanMenu/>*/}
                {/*<CarOrder/>*/}
                <CarWaiting/>
            </View>
        </>
    );
};


export default MainScreen;