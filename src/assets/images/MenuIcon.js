import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from "react-native"

function MenuIcon({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.menu}>
                <Image source={require('./MenuIcon.png')}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    menu: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
    }
});

export default MenuIcon
