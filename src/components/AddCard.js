import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import Colors from "../assets/styles/Colors";

const AddCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Новая карта</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: Colors.background,
        elevation: 10,
        borderRadius: 10,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#BBBFC7',
        borderStyle: 'dashed'

    },
    text: {
        fontSize: 20,
        color: '#646974'
    }
});

export default AddCard;