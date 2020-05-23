import React from 'react';
import {TouchableWithoutFeedback, View} from "react-native";

import styles from "./styles";
import Colors from "../../assets/styles/Colors";


const RadioButton = ({selected, onPress, containerStyle, innerStyle, disabled=false}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <View style={[styles.radioButton, selected && {borderColor: Colors.blue}, containerStyle]}>
                {selected && <View style={[styles.inner, innerStyle]}/>}
            </View>
        </TouchableWithoutFeedback>
    )
};

export default RadioButton;
