import React from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback} from "react-native"
import Colors from "../assets/styles/Colors";
import InfoIcon from "./InfoIcon";

const CarItem = ({active, onInfoPress, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.planItem, active && styles.activeContainerStyle]}>
                <View style={{marginTop: 6}}>
                    <Text style={[styles.text, active && styles.activeText]}>Эконом</Text>
                    <Text style={[styles.text, active && styles.activeText]}>от 5 000</Text>
                    <Text style={[{fontSize: 12}, active && {color: '#fff'}]}>5 мин</Text>
                </View>
                <TouchableWithoutFeedback onPress={onInfoPress}>
                    <InfoIcon style={{position: 'absolute', right: 4.4, top: 3.4}}/>
                </TouchableWithoutFeedback>
                <Image style={styles.img} source={require('../assets/images/car.png')}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    planItem: {
        width: 171,
        height: 74,
        backgroundColor: "#F2F2F2",
        marginRight: 15.3,
        borderRadius: 15,
        paddingLeft: 13,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    img: {
        position: 'absolute',
        right: -27,
        bottom: 5.2
    },
    activeContainerStyle: {
        backgroundColor: Colors.blue
    },
    activeText: {
        color: '#fff'
    }
});

export default CarItem;