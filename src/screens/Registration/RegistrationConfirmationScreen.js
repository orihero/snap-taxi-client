import React, {useState} from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView, StatusBar, Dimensions,} from "react-native"
import Colors from "../../assets/styles/Colors";
import Button from "../../components/Button";
import ConfirmationIcon from "../../assets/images/ConfirmationIcon";
import RegistrationTop from "../../components/RegistrationTop/RegistrationTop";
import {Bold, SemiBold} from "../../components/Layout/AppText";
import Screen from "../../helpers/Dimensions";

const RegistrationConfirmationScreen = () => {
    return (
        <View style={{flex: 1}}>

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
                </View>
            </KeyboardAvoidingView>
            <View style={{marginHorizontal: 15}}>
                <Button
                    title={'Отправить'}
                    containerStyle={{marginBottom: 20}}
                />
            </View>
        </View>
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
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: "15%",
        backgroundColor: Colors.background,
        elevation: 10,
    },
    heading: {fontSize: Screen.width > 400 ? 20 : 15, marginBottom: 46},
    icon: {marginLeft: 16.6, marginRight: 19.6, marginTop: 10},
    bottom: {alignItems: 'center', flexDirection: 'row', marginBottom: 50},
    input: {color: '#858585', fontSize: 16, fontFamily: 'SFUIDisplay-Regular'},
    confirm: {color: '#858585', fontSize: 14, textAlign: 'center'},
    time: {fontSize: 14, textAlign: 'center'}
});

export default RegistrationConfirmationScreen;
