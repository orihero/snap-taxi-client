import React, {useState} from 'react';
import {View, Dimensions} from 'react-native'
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
    const [value, setValue] = useState();
    return (
        <>
            <View style={{flex: 1}}>
                <Header navigation={navigation}/>
                <MapScreen/>
                {/*{!isAddressSelected && <Search value={value} setValue={setValue}/>}*/}
                {/*{!isAddressSelected && !value && <Directions/>}*/}
                {/*{isAddressSelected && !isTaxiOrdered && <SelectedDestination/>}*/}
                {/*{isAddressSelected && !isTaxiOrdered && <SelectPlanMenu/>}*/}
                {/*{isTaxiOrdered && !isTaxiWaiting && <CarOrder/>}*/}
                {/*{isTaxiWaiting && <CarWaiting/>}*/}
                <CarWaiting/>
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