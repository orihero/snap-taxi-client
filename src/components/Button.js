import React from 'react';
import {View, StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform} from "react-native";
import Colors from "../assets/styles/Colors";
import {SemiBold} from "./Layout/AppText";

const Button = ({title, containerStyle, onPress, texStyle}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    return (
        <View style={[styles.button, containerStyle]}>
            <TouchableComponent
                onPress={onPress}
            >
                <View style={styles.wrapper}>
                    <SemiBold style={[{color: '#2A1E06'}, texStyle]}>{title}</SemiBold>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        marginTop: 'auto',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: Colors.yellow,
        width: '100%',
    },
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default Button;
