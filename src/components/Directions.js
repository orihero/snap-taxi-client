import React, {useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, PanResponder, Animated} from "react-native"
import HomeIcon from "../assets/images/HomeIcon";
import CursorIcon from "../assets/images/CursorIcon";
import BagIcon from "../assets/images/BagIcon";
import SearchResult from "./SearchResult";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Colors from "../assets/styles/Colors";


const Directions = ({navigation}) => {
    const translateY = useRef(new Animated.Value(0)).current;
    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return !(gestureState.dy === 0 || (gestureState.dy < 1 && gestureState.dy > -2))
        },
        onPanResponderGrant: (evt, gestureState) => {
            translateY.extractOffset()
        },
        onPanResponderMove: (evt, gestureState) => {
            translateY.setValue(-gestureState.dy);
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dy < 0) {
                Animated.spring(translateY, {
                    toValue: 150,
                    useNativeDriver: false
                }).start()
            } else if (gestureState.dy > 0) {
                Animated.spring(translateY, {
                    toValue: -150,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;
    const height = translateY.interpolate({
        inputRange: [-1, 0, 150],
        outputRange: [0, 0, 150],
        extrapolate: 'clamp'
    });
    return (
        <Animated.View style={[styles.container]}>
            <View style={styles.directions}>
                <View style={styles.icon}><HomeIcon/></View>
                <View style={styles.circleIcon}><CursorIcon/></View>
                <View style={styles.icon}><BagIcon/></View>
            </View>
            <BottomMenuCurve width={Dimensions.get('window').width}/>
            <View
                style={[styles.content]}
                {...panResPonder.panHandlers}
            >
                <View style={styles.draggable}/>
                <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                <Animated.View style={{height, overflow: 'hidden'}}>
                    <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                    <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                </Animated.View>
            </View>
        </Animated.View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden'
    },
    content: {
        backgroundColor: Colors.background,
    },
    directions: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 32,
    },
    icon: {
        width: 53,
        height: 48.74,
        borderRadius: 14,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    circleIcon: {
        top: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2.7,
        width: 52,
        height: 52,
        borderRadius: 100,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
    },
    draggable: {
        width: 40,
        height: 4,
        alignSelf: 'center',
        backgroundColor: '#2A2E43',
        opacity: .23,
        borderRadius: 100,
        marginTop: 6
    }
});

export default Directions;
