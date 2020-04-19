import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform} from "react-native";
import Colors from "../assets/styles/Colors";

const Button = ({title, style, onPress, texStyle, shadow}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    return (
        <TouchableComponent
            onPress={onPress}
        >
            <View style={{...styles.button, ...style, elevation: shadow && 4}}>
                <Text style={[{color: '#2A1E06', fontWeight: 'bold'}, texStyle]}>{title}</Text>
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 10,
        backgroundColor: Colors.yellow,
        width: '100%',
    },
});


export default Button;