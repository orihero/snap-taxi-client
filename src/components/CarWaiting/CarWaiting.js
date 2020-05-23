import React, {useRef, useState} from 'react';
import {View, Dimensions, Animated, PanResponder, StatusBar} from "react-native"
import {useNavigation} from "@react-navigation/native"

import styles from "./styles";
import Button from "../Button";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";
import DriverInfo from "../DriverInfo/DriverInfo";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import ComingIcon from "../../assets/images/ComingIcon";
import CancelTripIcon from "../../assets/images/CancelTripIcon";
import WaitIcon from "../../assets/images/WaitIcon";
import {Bold, Regular} from "../Layout/AppText";
import {localization} from "../../services/Localization";
import SwitchWithText from "../SwitchWithText";
import AirConditionIcon from "../../assets/images/AirConditionIcon";

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
                    toValue: 260,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;
    const collapse = height.interpolate({
        inputRange: [-1, 260],
        outputRange: [0, 260],
        extrapolate: 'clamp'
    });

    const backgroundColor = collapse.interpolate({
        inputRange: [0, 260],
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
                        <View style={styles.actionButtons}>
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
                            <View style={styles.destinationWrapper}>
                                <SelectedDestination containerStyle={{marginBottom: 10, paddingTop: 11}}/>
                            </View>
                            <SwitchWithText
                                style={styles.switch}
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


export default CarWaiting;
