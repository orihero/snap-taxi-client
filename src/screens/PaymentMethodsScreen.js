import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from "react-native"
import WalletIcon from "../assets/images/WalletIcon";
import Colors from "../assets/styles/Colors";
import CardIcon from "../assets/images/CardIcon";
import Button from "../components/Button";

const PaymentMethodsScreen = ({navigation}) => {
    const [acceptCall, setAcceptCall] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.option}>
                <WalletIcon style={{marginRight: 20}} color={acceptCall ? Colors.blue : '#000'}/>
                <Text
                    style={{color: acceptCall ? Colors.blue : '#000', fontWeight: 'bold', fontSize: 15}}
                >Наличность</Text>
            </View>
            <View style={styles.option}>
                <CardIcon style={{marginRight: 20}} color={acceptCall ? Colors.blue : '#000'}/>
                <Text
                    style={{color: acceptCall ? Colors.blue : '#000', fontWeight: 'bold', fontSize: 15}}
                >Картой</Text>
            </View>
            <Button
                title={'Добавить карту'}
                style={{marginTop: 'auto', marginBottom: 50}}
                texStyle={{fontWeight: '600'}}
                onPress={() => navigation.navigate('AddCard')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    option: {
        flexDirection: 'row',
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1
    }
});


export default PaymentMethodsScreen;