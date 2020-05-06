import React, {useState} from 'react';
import {View} from 'react-native'
import MapScreen from "./MapScreen";
import Directions from "../components/Directions";
import Search from "../components/Search";
import Header from "../components/Header";


const MainScreen = ({navigation}) => {
    const [isSearchActive, setSearchActive] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <MapScreen/>
            <Search navigation={navigation} setSearchActive={setSearchActive}/>
            {!isSearchActive && <Directions navigation={navigation}/>}
        </View>
    );
};


export default MainScreen
