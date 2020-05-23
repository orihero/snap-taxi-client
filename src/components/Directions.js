import React, {useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    Dimensions,
    PanResponder,
    Animated,
    Platform,
    PermissionsAndroid
} from "react-native"
import Geolocation from '@react-native-community/geolocation';
import CursorIcon from "../assets/images/CursorIcon";
import SearchResult from "./SearchResult/SearchResult";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Colors from "../assets/styles/Colors";
import {SemiBold} from "./Layout/AppText";

const Directions = ({navigation}) => {
    const fuck = async () => {
        let hasPermission;
        if (Platform.OS === 'android') {
            hasPermission = await PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION");
            if (!hasPermission) {
                const status = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                hasPermission = status === PermissionsAndroid.RESULTS.GRANTED;
                if (hasPermission) {
                    Geolocation.getCurrentPosition(info => console.log(info));
                }
            }
        }
    };
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
                <TouchableWithoutFeedback onPress={fuck}>
                    <View style={styles.circleIcon}><CursorIcon/></View>
                </TouchableWithoutFeedback>
                <View style={styles.borderless}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('SelectCar')}>
                        <View style={styles.next}>
                            <SemiBold>Далее</SemiBold>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
            <BottomMenuCurve width={Dimensions.get('window').width}/>
            <View
                style={[styles.content]}
                {...panResPonder.panHandlers}
            >
                <View style={styles.draggable}/>
                <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                <Animated.View style={{height: height > 150 ? 'auto' : height, overflow: 'hidden'}}>
                    <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                    <SearchResult border={false} onPress={() => navigation.navigate('SelectCar')}/>
                </Animated.View>
            </View>
        </Animated.View>

    );
};

const styles = StyleSheet.create({
    borderless: {
        overflow: 'hidden',
        borderRadius: 15,
        position: "absolute",
        right: 0,
        bottom: 10,
    },
    next: {
        backgroundColor: Colors.yellow,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
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
        justifyContent: 'center',
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
