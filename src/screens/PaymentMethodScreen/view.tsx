import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from "react-native"

import styles from "./styles";
import WalletIcon from "../../assets/images/WalletIcon";
import Colors from "../../assets/styles/Colors";
import Button from "@components/Button";
import CardItem from "@components/CardItem";
import {Bold} from "@components/Layout/AppText";
import {localization} from "../../services/Localization";

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

const PaymentMethodScreenView = ({routeTo, setPaymentMethod, paymentMethod}) => {
    const [card, setCard] = useState({0: true});


    return (
        <View style={styles.container}>
            <PaymentType
                onPress={setPaymentMethod('cash')}
                selected={paymentMethod === 'cash'}
                label={localization.byCash}
            />
            <PaymentType
                onPress={setPaymentMethod('card')}
                selected={paymentMethod === 'card'}
                label={localization.byCard}
            />
            {
                paymentMethod === 'card' && <View style={styles.cards}>
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
                title={localization.addCard}
                containerStyle={{marginTop: 'auto', marginBottom: 50}}
                texStyle={{fontWeight: '600'}}
                onPress={routeTo('AddCard')}
            />
        </View>
    );
};


export default PaymentMethodScreenView;
