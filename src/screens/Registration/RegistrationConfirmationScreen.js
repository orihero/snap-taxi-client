import React, {useState} from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar,} from "react-native"
import Colors from "../../assets/styles/Colors";
import Button from "../../components/Button";
import ConfirmationIcon from "../../assets/images/ConfirmationIcon";
import RegistrationTop from "../../components/RegistrationTop";
import {Bold, SemiBold} from "../../components/Layout/AppText";

const RegistrationConfirmationScreen = () => {
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
            <StatusBar backgroundColor={Colors.blue}/>
            <RegistrationTop/>
            <View style={styles.registrationContainer}>
                <View>
                    <SemiBold>Пожалуйста, введите код, </SemiBold>
                    <Bold style={styles.heading}>который мы прислали по SMS</Bold>
                </View>
                <View style={styles.registrationForm}>
                    <ConfirmationIcon style={styles.icon}/>
                    <TextInput style={styles.input} placeholder={'Введите код'}/>
                </View>
                <View style={styles.bottom}>
                    <Bold style={styles.confirm}>Запросить новый код через</Bold>
                    <Bold style={styles.time}>&nbsp;&nbsp;30 сек</Bold>
                </View>
                <Button
                    title={'Продолжить'}
                    style={{marginBottom: 20, marginTop: 'auto'}}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    registrationContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
        paddingTop: 57,
    },
    registrationForm: {
        borderRadius: 10,
        width: '100%',
        borderWidth: 2,
        borderColor: '#fff',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100,
        backgroundColor: Colors.background,
        elevation: 10,
    },
    heading: {fontSize: 20, marginBottom: 46},
    icon: {marginLeft: 16.6, marginRight: 19.6, marginTop: 10},
    bottom: {alignItems: 'center', flexDirection: 'row', marginBottom: 50},
    input: {color: '#858585', fontSize: 16, fontFamily: 'SFUIDisplay-Regular'},
    confirm: {color: '#858585', fontSize: 14, textAlign: 'center'},
    time: {fontSize: 14, textAlign: 'center'}
});

export default RegistrationConfirmationScreen;