import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, StatusBar} from "react-native"
import Colors from "../../assets/styles/Colors";
import Logo from "../../assets/images/Logo";
import PhoneIcon from "../../assets/images/PhoneIcon";
import Button from "../../components/Button";
import {Bold, Regular, SemiBold} from "../../components/Layout/AppText";
import RegistrationTop from "../../components/RegistrationTop";


const RegistrationScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState();
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
            <StatusBar backgroundColor={Colors.blue}/>
            <RegistrationTop/>
            <View style={styles.registrationContainer}>
                <View style={{alignItems: 'center'}}>
                    <SemiBold>Здраствуйте, мы рады что Вы выбрали нас</SemiBold>
                    <Bold style={styles.heading}>Давайте зарегистрируем Вас</Bold>
                </View>
                <View style={styles.registrationForm}>
                    <PhoneIcon style={styles.phoneIcon}/>
                    <Text style={{color: '#232323', fontSize: 16}}>+998</Text>
                    <TextInput style={{color: '#232323', fontSize: 16}} placeholder={'Введите Ваш номер'}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Regular style={styles.auth}>Авторизуйтесь, вы полностью соглашаетесь с нашими</Regular>
                    <Bold style={styles.privacy}>правилами сервиса и Публичной афертой</Bold>
                </View>
                <Button
                    title={'Отправить'}
                    containerStyle={{marginBottom: 20}}
                    onPress={() => navigation.navigate('RegistrationConfirmation')}
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
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height > 700 ? 84 : 30,
        backgroundColor: '#fff',
        elevation: 10,
    },
    heading: {fontSize: 20, marginBottom: 46},
    phoneIcon: {marginLeft: 18, marginRight: 15.73},
    auth: {color: '#858585', fontSize: 13, textAlign: 'center'},
    privacy: {color: '#858585', marginBottom: 50}
});

export default RegistrationScreen;