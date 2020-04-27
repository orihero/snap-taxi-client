import React, {useState, useRef} from 'react';
import {View, StyleSheet, PanResponder, Animated, TouchableWithoutFeedback} from "react-native";
import UzcardIcon from "../assets/images/UzcardIcon";
import RadioButton from "./RadioButton";
import Colors from "../assets/styles/Colors";
import TrashIcon from "../assets/images/TrashIcon";
import {SemiBold} from "./Layout/AppText";

const CardItem = ({onPress, selected}) => {
    const pan = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0)).current;
    const [isDisabled, setIsDisabled] = useState(false);
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
            pan.setOffset(pan._value)
        },
        onPanResponderMove: (evt, gestureState) => {
            if (gestureState.dx >= -46 && gestureState.dx <= 0 && (pan._offset + pan._value) >= -46) {
                pan.setValue(gestureState.dx);
                Animated.spring(scale, {
                    toValue: 1,
                    useNativeDriver: true
                }).start();
                setIsDisabled(true);
            } else if (gestureState.dx > 0 && gestureState.dx <= 46 && (pan._offset + pan._value) <= -2) {
                pan.setValue(gestureState.dx);
                Animated.spring(scale, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
                setIsDisabled(false);
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            pan.flattenOffset();
        }
    })).current;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View
                style={[styles.card, {transform: [{translateX: pan}]}]} {...panResponder.panHandlers}>
                <UzcardIcon style={{marginRight: 14}} width={23} height={30}/>
                <View>
                    <View>
                        <SemiBold style={{fontSize: 15, color: Colors.blue}}>+998 90 755 4554</SemiBold>
                        <View style={{flexDirection: 'row', marginLeft: 4}}>
                            <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>5575</SemiBold>
                            <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>7577</SemiBold>
                            <SemiBold style={{marginRight: 10, color: '#646974', fontSize: 15}}>6512</SemiBold>
                            <SemiBold style={{color: '#646974', fontSize: 15}}>6578</SemiBold>
                        </View>
                    </View>
                </View>
                <RadioButton
                    disabled={isDisabled}
                    selected={selected}
                    containerStyle={{width: 17, height: 17}}
                    innerStyle={{width: 9, height: 9}}
                />
            </Animated.View>
            <Animated.View style={[styles.icon, {transform: [{scale}]}]}>
                <TrashIcon/>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingTop: 9,
        paddingBottom: 14.2,
        paddingLeft: 18.7,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        backgroundColor: Colors.background,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#fff'
    },
    icon: {
        position: 'absolute',
        right: 10,
        alignSelf: 'center',
        top: 25
    }
});

export default CardItem;