import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet, Animated, PanResponder} from "react-native"
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

const CarWaiting = () => {
    const navigation = useNavigation();
    const height = useRef(new Animated.Value(0)).current;
    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return !(gestureState.dx === 0 && gestureState.dy === 0)
        },
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
                    toValue: 0,
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
    const collapse = height.interpolate({
        inputRange: [-10, -1, 0, 1, 10, 250, 251],
        outputRange: [0, 0, 0, 0, 10, 240, 240]
    });

    return (
        <>
            <View style={{marginTop: 'auto'}}>
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
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={styles.column}>
                                    <Button title={localization.moreTaxi} shadow/>
                                </View>
                                <View style={styles.column}>
                                    <Button
                                        title={localization.cancel}
                                        containerStyle={{backgroundColor: '#f2f2f2'}}

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
        borderBottomWidth: 1,
        borderBottomColor: '#EAECF1',
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
    }
});

export default CarWaiting;
