import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from "react-native"
import Colors from "../assets/styles/Colors";
import {localization} from "../services/Localization";

const AddCard = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{localization.newCard}</Text>
            </View>
        </TouchableWithoutFeedback>
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
