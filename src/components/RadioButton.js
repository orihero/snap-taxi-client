import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import Colors from "../assets/styles/Colors";


const RadioButton = ({selected, onPress, containerStyle, innerStyle, disabled=false}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <View style={[styles.radioButton, selected && {borderColor: Colors.blue}, containerStyle]}>
                {selected && <View style={[styles.inner, innerStyle]}/>}
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    radioButton: {
        width: 23,
        height: 23,
        borderColor: '#B8B8B8',
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner: {
        width: 13,
        height: 13,
        borderRadius: 100,
        backgroundColor: '#3AB7E7'
    }
});

export default RadioButton;