import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, StatusBar, Platform} from "react-native"
import Colors from "../../assets/styles/Colors";
import Logo from "../../assets/images/Logo";
import PhoneIcon from "../../assets/images/PhoneIcon";
import CloudIcon from "../../assets/images/CloudIcon";
import Button from "../../components/Button";
import ConfirmationIcon from "../../assets/images/ConfirmationIcon";

const RegistrationConfirmationScreen = () => {
    const [selectedValue, setSelectedValue] = useState();
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
            <StatusBar backgroundColor={Colors.blue}/>
            <View style={styles.top}>
                <CloudIcon height={32.37} width={50.24} style={{top: 20, right: 15.26}}/>
                <CloudIcon height={42.65} width={76.74} style={{bottom: 198.35, left: 86}}/>
                <CloudIcon height={37.24} width={67} style={{bottom: 83.76, left: 20}}/>
                <CloudIcon height={60.58} width={109} style={{bottom: 23.35, right: 28}}/>
                <Logo style={{alignSelf: 'flex-end', marginBottom: 109.18}}/>
            </View>
            <View style={styles.registrationContainer}>
                <View>
                    <Text style={{color: '#232323'}}>Пожалуйста, введите код, </Text>
                    <Text style={{color: '#232323', fontSize: 20, marginBottom: 46, fontWeight: 'bold'}}>
                        который мы прислали по SMS
                    </Text>
                </View>
                <View style={styles.registrationForm}>
                    <ConfirmationIcon style={{marginLeft: 16.6, marginRight: 19.6, marginTop: 10}}/>
                    <TextInput style={{color: '#232323', fontSize: 16}} placeholder={'Введите код'}/>
                </View>
                <View style={{alignItems: 'center', flexDirection: 'row', marginBottom: 50}}>
                    <Text style={{color: '#858585', fontSize: 14, textAlign: 'center', fontWeight: 'bold'}}>
                        Запросить новый код через
                    </Text>
                    <Text style={{fontSize: 14, textAlign: 'center', fontWeight: 'bold'}}>&nbsp;&nbsp;30 сек</Text>
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
    top: {
        backgroundColor: Colors.blue,
        height: Dimensions.get('window').height * 0.4,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    registrationContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
        paddingTop: 57,
    },
    registrationForm: {
        borderRadius: 10,
        width: '100%',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100,
        backgroundColor: '#fff',
        elevation: 10,
    },
});

export default RegistrationConfirmationScreen;