import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform} from "react-native";
import Colors from "../assets/styles/Colors";

const Button = ({title, style, onPress, texStyle, shadow}) => {
    const TouchableComponent = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback;
    return (
        <View style={{borderRadius: 10, overflow: 'hidden', width: '100%', elevation: shadow && 4}}>
            <TouchableComponent
                onPress={onPress}
            >
                <View style={{...styles.button, ...style}}>
                    <Text style={[{color: '#2A1E06', fontWeight: 'bold'}, texStyle]}>{title}</Text>
                </View>
            </TouchableComponent>
        </View>
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