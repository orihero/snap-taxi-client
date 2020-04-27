import React, {useEffect} from 'react';
import {View} from 'react-native'
import MapScreen from "./MapScreen";
import SelectedDestination from "../components/SelectedDestination";
import Directions from "../components/Directions";
import SelectPlanMenu from "../components/SelectPlanMenu";
import Search from "../components/Search";
import CarOrder from "../components/CarOrder";
import CarWaiting from "../components/CarWaiting";
import Header from "../components/Header";
import {connect} from "react-redux";


const MainScreen = ({navigation, isAddressSelected, isTaxiOrdered, isTaxiWaiting}) => {

    return (
        <>
            <View style={{flex: 1}}>
                <Header navigation={navigation}/>
                <MapScreen/>
                {!isAddressSelected && <Search/>}
                {!isAddressSelected && <Directions/>}
                {isAddressSelected && !isTaxiOrdered && <SelectedDestination/>}
                {isAddressSelected && !isTaxiOrdered && <SelectPlanMenu/>}
                {isTaxiOrdered && !isTaxiWaiting && <CarOrder/>}
                {isTaxiWaiting && <CarWaiting/>}
            </View>
        </>
    );
};

const mapStateToProps = state => ({
    isAddressSelected: state.address.isFetched,
    isTaxiOrdered: state.taxi.isFetched,
    isTaxiWaiting: state.taxi.waiting,
});

export default connect(mapStateToProps)(MainScreen);