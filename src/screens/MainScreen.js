import React from 'react';
import {View, StyleSheet, Modal} from 'react-native'
import Header from "../components/Header";
import MapScreen from "./MapScreen";
import SelectedDestination from "../components/SelectedDestination";
import BottomDrawerMenu from "../components/BottomDrawerMenu";
import SelectPlanMenu from "../components/SelectPlanMenu";
import Search from "../components/Search";


const MainScreen = () => {
    return (
        <View style={{flex: 1}}>
            <MapScreen/>
            <Header/>
            {/*<Search/>*/}
            {/*<BottomDrawerMenu/>*/}
            <SelectedDestination/>
            <SelectPlanMenu/>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default MainScreen;