import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, StatusBar, Platform} from "react-native"
import Colors from "../assets/styles/Color";
import Logo from "../assets/images/Logo";
import PhoneIcon from "../assets/images/PhoneIcon";
import CloudIcon from "../assets/images/CloudIcon";
import Button from "../components/Button";

const RegistrationScreen = () => {
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
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: '#232323'}}>Здраствуйте, мы рады что Вы выбрали нас</Text>
                    <Text style={{color: '#232323', fontSize: 24, marginBottom: 46, fontWeight: 'bold'}}>Давайте
                        зарегистрируем
                        Вас</Text>
                </View>
                <View style={styles.registrationForm}>
                    <PhoneIcon style={{marginLeft: 18, marginRight: 15.73}}/>
                    <Text style={{color: '#232323', fontSize: 16}}>+998</Text>
                    <TextInput style={{color: '#232323', fontSize: 16}} placeholder={'Введите Ваш номер'}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: '#858585', fontSize: 13, textAlign: 'center'}}>Авторизуйтесь, вы
                        полностью
                        соглашаетесь с нашими</Text>
                    <Text style={{color: '#858585', fontWeight: 'bold', marginBottom: 50}}>правилами сервиса и
                        Публичной
                        афертой</Text>
                </View>
                <Button
                    title={'Отправить'}
                    style={{marginBottom: 20}}
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
        marginBottom: 84,
        ...Platform.select({
            android: {
                borderBottomColor: '#232323',
                borderBottomWidth: 1,
            }
        })
    },
});

export default RegistrationScreen;