import React, {useRef, useState} from 'react';
import {View, Dimensions, StyleSheet, Animated, PanResponder, StatusBar} from "react-native"
import Button from "./Button";
import {DestContent} from "./SelectedDestination";
import DriverInfo from "./DriverInfo";
import Colors from "../assets/styles/Colors";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import ComingIcon from "../assets/images/ComingIcon";
import CancelTripIcon from "../assets/images/CancelTripIcon";
import WaitIcon from "../assets/images/WaitIcon";
import {useNavigation} from "@react-navigation/native"
import {Bold, Regular} from "./Layout/AppText";
import {localization} from "../services/Localization";
import SwitchWithText from "./SwitchWithText";
import AirConditionIcon from "../assets/images/AirConditionIcon";

const CarWaiting = () => {
    const navigation = useNavigation();
    setTimeout(() => navigation.navigate('RateTrip'), 10000);
    const [airCondition, setAirCondition] = useState(true);
    const height = useRef(new Animated.Value(0)).current;
    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return !(gestureState.dy === 0 || (gestureState.dy < 1 && gestureState.dy > -2))
        },
        onPanResponderGrant: (evt, gestureState) => {
            height.setOffset(height._value)
        },
        onPanResponderMove: (evt, gestureState) => {
            height.setValue(gestureState.dy * -1);
        },
        onPanResponderRelease: (evt, gestureState) => {
            height.flattenOffset();
            if (gestureState.dy > 0) {
                Animated.spring(height, {
                    toValue: 0,
                    useNativeDriver: false
                }).start()
            } else if (gestureState.dy < 0) {
                Animated.spring(height, {
                    toValue: 290,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;
    const collapse = height.interpolate({
        inputRange: [-1, 290],
        outputRange: [0, 290],
        extrapolate: 'clamp'
    });

    const backgroundColor = collapse.interpolate({
        inputRange: [0, 290],
        outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']
    });

    return (
        <>
            <Animated.View style={[{backgroundColor}, styles.overlay]} pointerEvents={'none'}/>
            <View style={{marginTop: 'auto'}}>
                <StatusBar setBarStyle={{backgroundColor}}/>
                <DriverInfo/>
                <View style={[styles.shadow]}  {...panResPonder.panHandlers}>
                    <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.draggable}/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 10,
                            marginBottom: 8
                        }}>
                            <View style={styles.icon}>
                                <ComingIcon/>
                            </View>
                            <View style={[styles.icon, {marginHorizontal: 38}]}>
                                <CancelTripIcon/>
                            </View>
                            <View style={styles.icon}>
                                <WaitIcon/>
                            </View>
                        </View>
                        <Animated.View style={{height: collapse, overflow: 'hidden'}}>
                            <View style={styles.fee}>
                                <Bold style={{fontSize: 17}}>{localization.fee}</Bold>
                                <Bold style={{fontSize: 17, marginLeft: 'auto'}}>35 500 </Bold>
                                <Regular style={{lineHeight: 25}}>сум</Regular>
                            </View>
                            <View style={{
                                borderBottomWidth: 1,
                                borderTopWidth: 1,
                                borderColor: '#EAECF1',
                                marginBottom: 13
                            }}>
                                <DestContent containerStyle={{marginBottom: 0, paddingTop: 11}}/>
                            </View>
                            <SwitchWithText
                                style={{paddingVertical: 0, paddingBottom: 13.4, borderBottomWidth: 0}}
                                Icon={AirConditionIcon}
                                text={localization.airCondition}
                                setValue={setAirCondition}
                                value={airCondition}
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={styles.column}>
                                    <Button title={localization.moreTaxi} shadow/>
                                </View>
                                <View style={styles.column}>
                                    <Button
                                        title={localization.cancel}
                                        containerStyle={{backgroundColor: '#f2f2f2'}}
                                        onPress={() => navigation.navigate('Home')}
                                    />
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: Dimensions.get('window').width - 32,
        elevation: 10,
        alignSelf: 'center',
        marginBottom: 12,
        borderRadius: 15,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.background,
        paddingBottom: 23,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0,
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 11,
        paddingTop: 5,
        alignItems: 'flex-end',
        overflow: 'hidden'
    },
    icon: {
        width: 56,
        height: 56,
        borderRadius: 100,
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        width: '48.5%'
    },
    draggable: {
        width: 40,
        height: 4,
        alignSelf: 'center',
        backgroundColor: '#2A2E43',
        opacity: .23,
        borderRadius: 100,
        marginTop: 6
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

export default CarWaiting;
