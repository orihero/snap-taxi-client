import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Keyboard} from 'react-native'
import Header from "../components/Header";
import Search from "../components/Search";
import HomeIcon from "../assets/images/HomeIcon";
import CursorIcon from "../assets/images/CursorIcon";
import BagIcon from "../assets/images/BagIcon";
import SearchResult from "../components/SearchResult";
import BottomDrawer from "../components/BottomMenu/BottomDrawer";
import MapScreen from "./MapScreen";


const MainScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Header/>
            <Search/>
            <MapScreen/>
            <BottomDrawer>
                <View style={styles.directions}>
                    <View style={styles.icon}><HomeIcon/></View>
                    <View style={styles.circleIcon}><CursorIcon/></View>
                    <View style={styles.icon}><BagIcon/></View>
                </View>
                <View style={styles.dragIcon}/>
                <View>
                    <SearchResult/>
                </View>
            </BottomDrawer>
        </View>
    );
};

const styles = StyleSheet.create({
    directions: {
        position: 'absolute',
        top: -52.7,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 32,
    },
    icon: {
        width: 53,
        height: 48.74,
        borderRadius: 14,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2.7,
        backgroundColor: '#fff',
        width: 52,
        height: 52,
        borderRadius: 100,
    },
    dragIcon: {
        marginTop: 22,
        height: 4,
        width: 40,
        alignSelf: 'center',
        backgroundColor: '#2A2E43',
        opacity: 0.23,
        marginBottom: 19
    }
});

export default MainScreen;