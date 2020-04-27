import React, {useState, useRef} from 'react';
import {View, StyleSheet, Dimensions, PanResponder, Animated} from "react-native"
import HomeIcon from "../assets/images/HomeIcon";
import CursorIcon from "../assets/images/CursorIcon";
import BagIcon from "../assets/images/BagIcon";
import SearchResult from "./SearchResult";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Colors from "../assets/styles/Colors";


const Directions = () => {
    const height = useRef(new Animated.Value(80)).current;
    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt, gestureState) => {
            height.setOffset(height._value)
        },
        onPanResponderMove: (evt, gestureState) => {
            height.setValue(gestureState.dy * -1);
        },
        onPanResponderRelease: (evt, gestureState) => {
            height.flattenOffset();
            if (height._value < 240) {
                Animated.spring(height, {
                    toValue: 80,
                    useNativeDriver: false
                }).start()
            } else if (height._value > 250) {
                Animated.spring(height, {
                    toValue: 250,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;
    return (
        <View style={styles.container}>
            <View style={styles.directions}>
                <View style={styles.icon}><HomeIcon/></View>
                <View style={styles.circleIcon}><CursorIcon/></View>
                <View style={styles.icon}><BagIcon/></View>
            </View>
            <BottomMenuCurve width={Dimensions.get('window').width}/>
            <Animated.View style={[styles.content, {height}]} {...panResPonder.panHandlers}>
                <View style={styles.draggable}/>
                <SearchResult/>
                <SearchResult/>
                <SearchResult/>
            </Animated.View>
        </View>

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