import React, {useState} from 'react';
import {View, Modal, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput} from 'react-native'

import styles from "./styles";
import {Bold, Light} from "../Layout/AppText";
import Colors from "../../assets/styles/Colors";
import {TextInputMask} from "react-native-masked-text";
import ChipIcon from "../../assets/images/ChipIcon";
import Button from "../Button";

const AddCardModal = ({isOpen, setIsOpen}) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Modal
            visible={isOpen}
            statusBarTranslucent={true}
            transparent={true}
            onRequestClose={() => setIsOpen(false)}
            animationType={'slide'}
        >
            <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
                <View style={{backgroundColor: 'rgba(0,0,0,.2)', flex: 1}}/>
            </TouchableWithoutFeedback>
            <KeyboardAvoidingView behavior={'padding'}>
                <View style={{marginTop: 'auto', backgroundColor: 'rgba(0,0,0,.2)'}}>
                    <View style={styles.addCardContainer}>
                        <Bold style={{fontSize: 17, marginBottom: 20, color: Colors.grey}}>Добавление карты</Bold>
                        <View style={styles.form}>
                            <View style={{marginBottom: 10}}>
                                <Light style={{marginBottom: 5.3}}>Номер карты</Light>
                                <View style={styles.inputWrapper}>
                                    <TextInputMask
                                        placeholder={'0000 0000 0000 0000'}
                                        style={styles.input}
                                        type={'credit-card'}
                                        options={{
                                            obfuscated: false,
                                            issuer: 'visa-or-mastercard'
                                        }}
                                        value={cardNumber}
                                        onChangeText={text => setCardNumber(text)}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 10}}>
                                <View style={{marginRight: 16}}>
                                    <Light style={{marginBottom: 5.3}}>год/месяц</Light>
                                    <View style={styles.inputWrapper}>
                                        <TextInputMask
                                            placeholder={'00/00'}
                                            style={styles.input}
                                            type={'datetime'}
                                            options={{
                                                format: 'MM/YY'
                                            }}
                                            value={cardYear}
                                            onChangeText={text => setCardYear(text)}
                                        />
                                    </View>
                                </View>
                                <View style={{flex: 1}}>
                                    <Light style={{marginBottom: 5.3}}>номер телефона</Light>
                                    <View style={styles.inputWrapper}>
                                        <TextInputMask
                                            keyboardType={'number-pad'}
                                            placeholder={'+998 99 999 99 99'}
                                            style={styles.input}
                                            type={'custom'}
                                            options={{
                                                mask: '+998 99 999 99 99'
                                            }}
                                            value={phoneNumber}
                                            onChangeText={text => setPhoneNumber(text)}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={[styles.inputWrapper, {flex: 1, marginRight: 15}]}>
                                    <TextInput
                                        style={{
                                            padding: 0,
                                            fontFamily: 'SFUIDisplay-Semibold'
                                        }}
                                        placeholder={'Прокопенко Вячеслав'}
                                    />
                                </View>
                                <ChipIcon/>
                            </View>
                        </View>
                        <Button title={'Добавить'}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};


export default AddCardModal;
