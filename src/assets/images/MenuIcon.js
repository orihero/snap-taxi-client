import React from 'react';
import {View, Image, TouchableWithoutFeedback, StyleSheet} from "react-native"
import {useNavigation} from '@react-navigation/native';

function MenuIcon() {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <View style={styles.menu}><Image source={require('./MenuIcon.png')}/></View>
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