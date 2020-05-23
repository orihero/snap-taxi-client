import React from 'react';
import {View, TouchableNativeFeedback, TouchableHighlight, Platform} from "react-native";

import styles from "./styles";
import {SemiBold} from "../Layout/AppText";

const Button = ({title, containerStyle, onPress, texStyle}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    return (
        <View style={[styles.button, containerStyle]}>
            <TouchableComponent onPress={onPress}>
                <View style={styles.wrapper}>
                    <SemiBold style={[{color: '#2A1E06'}, texStyle]}>{title}</SemiBold>
                </View>
            </TouchableComponent>
        </View>
    );
};

export default Button;
