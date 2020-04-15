import React from 'react';
import {View, Text} from 'react-native'
import Header from "../components/Header";
import Search from "../components/Search";

const MainScreen = () => {
    return (
        <View>
            <Header/>
            <Search/>
        </View>
    );
};

export default MainScreen;