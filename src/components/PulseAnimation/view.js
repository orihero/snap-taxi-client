import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Easing} from "react-native";
import PulseIcon from "../../assets/images/PuseIcon";
import Screen from "../../helpers/Dimensions";

const PulseAnimation = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )).start()
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <Animated.View style={[styles.container, {transform: [{rotate: spin}]}]}>
            <PulseIcon/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Screen.height / 2 - 43,
        left: Screen.width / 2 - 43,
        zIndex: -1
    }
});

export default PulseAnimation;
