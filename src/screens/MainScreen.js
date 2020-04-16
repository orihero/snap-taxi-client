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
    const [style, setStyles] = useState({});
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setStyles({display: 'none'})
    };

    const _keyboardDidHide = () => {
        setStyles({display: 'none'})
    };
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
    block: {
        width: 100,
        height: 100,
        backgroundColor: '#000'
    },
    bottomMenu: {
        alignContent: 'flex-end'
    },
    bottomMenuContent: {
        height: 125,
        backgroundColor: '#fff',
    },
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