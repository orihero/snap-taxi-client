import React, {useState} from 'react';
import {View, StyleSheet, Modal, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback} from "react-native"
import {TextInputMask} from 'react-native-masked-text'

import CardBigItem from "../components/CardBigItem";
import AddCard from "../components/AddCard";
import Colors from "../assets/styles/Colors";
import {Bold, Light} from "../components/Layout/AppText";
import Button from "../components/Button";
import ChipIcon from "../assets/images/ChipIcon";


const AddCardScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <View style={styles.container}>
            <CardBigItem/>
            {!isOpen && <AddCard onPress={() => setIsOpen(!isOpen)}/>}

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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        top: -35,
        zIndex: 2
    },
    addCardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: Colors.background,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    form: {
        backgroundColor: Colors.background,
        elevation: 10,
        padding: 18,
        borderRadius: 15,
        marginBottom: 17
    },
    inputWrapper: {
        height: 36,
        borderRadius: 12,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: 11
    },
    input: {
        padding: 0,
        margin: 0,
        fontSize: 15,
        color: '#646974',
        fontFamily: 'SFUIDisplay-Semibold'
    }
});

export default AddCardScreen;
