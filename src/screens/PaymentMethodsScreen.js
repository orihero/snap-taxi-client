import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import WalletIcon from "../assets/images/WalletIcon";
import Colors from "../assets/styles/Colors";
import Button from "../components/Button";
import CardItem from "../components/CardItem";
import {Bold} from "../components/Layout/AppText";

const RadioButton = ({selected}) => {
    return (
        <View style={[styles.radioButton, selected && {borderColor: Colors.blue}]}>
            {selected && <View style={{width: 13, height: 13, borderRadius: 100, backgroundColor: '#3AB7E7'}}/>}
        </View>
    )
};


const PaymentType = ({selected, label, onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.option}>
            <WalletIcon style={{marginRight: 20}} color={selected ? Colors.blue : '#000'}/>
            <Bold style={{color: selected ? Colors.blue : Colors.text, fontSize: 15}}>
                {label}
            </Bold>
            <RadioButton selected={selected} onPress={onPress}/>
        </View>
    </TouchableWithoutFeedback>
);

const PaymentMethodsScreen = ({navigation}) => {
    const [payment, setPayment] = useState({0: true});
    const [card, setCard] = useState({0: true});


    return (
        <View style={styles.container}>
            <PaymentType onPress={() => setPayment({0: true})} selected={payment[0]} label={'Наличность'}/>
            <PaymentType onPress={() => setPayment({1: true})} selected={payment[1]} label={'Картой'}/>
            {
                payment[1] && <View style={styles.cards}>
                    <CardItem
                        onPress={() => setCard({0: true})}
                        selected={card[0]}
                    />
                    <CardItem
                        onPress={() => setCard({1: true})}
                        selected={card[1]}
                    />
                </View>
            }
            <Button
                title={'Добавить карту'}
                containerStyle={{marginTop: 'auto', marginBottom: 50}}
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
    },
    radioButton: {
        width: 23,
        height: 23,
        borderColor: '#B8B8B8',
        borderWidth: 2,
        borderRadius: 100,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cards: {
        marginTop: 21
    },
});


export default PaymentMethodsScreen;