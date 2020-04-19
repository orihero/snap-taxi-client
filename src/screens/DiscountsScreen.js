import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import DiscountIcon from "../assets/images/DiscountIcon";
import Button from "../components/Button";

const DiscountsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <DiscountIcon style={{marginRight: 18}}/>
                <Text style={styles.text}>Ввести промокод</Text>
            </View>
            <Button
                title={'Применить'}
                style={{marginTop: 'auto', marginBottom: 50}}
                texStyle={{fontWeight: '600'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    row: {
        paddingVertical: 10,
        paddingHorizontal: 14.2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 2
    },
    text: {
        fontSize: 16,
        color: '#858585'
    }
});

export default DiscountsScreen;