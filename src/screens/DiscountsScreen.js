import React from 'react';
import {View, StyleSheet, TextInput} from "react-native"
import DiscountIcon from "../assets/images/DiscountIcon";
import Button from "../components/Button";
import Colors from "../assets/styles/Colors";
import {localization} from "../services/Localization";

const DiscountsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <DiscountIcon style={{marginRight: 18}}/>
                <TextInput style={styles.text} placeholder={localization.enterPromoCode}/>
            </View>
            <Button
                title={localization.apply}
                containerStyle={{marginBottom: 50}}
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
        height: 52,
        paddingHorizontal: 14.2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.background,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#858585',
        flex: 1
    }
});

export default DiscountsScreen;
