import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, StatusBar} from "react-native"
import Colors from "../../assets/styles/Colors";
import PhoneIcon from "../../assets/images/PhoneIcon";
import Button from "../../components/Button";
import {Bold, Regular, SemiBold} from "../../components/Layout/AppText";
import RegistrationTop from "../../components/RegistrationTop/RegistrationTop";
import Screen from "../../helpers/Dimensions";
import {TextInputMask} from "react-native-masked-text";


const RegistrationScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <View style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
                <RegistrationTop/>
                <View style={styles.registrationContainer}>
                    <View style={{alignItems: 'center'}}>
                        <SemiBold>Здраствуйте, мы рады что Вы выбрали нас</SemiBold>
                        <Bold style={styles.heading}>Давайте зарегистрируем Вас</Bold>
                    </View>
                    <View style={styles.registrationForm}>
                        <PhoneIcon style={styles.phoneIcon}/>
                        <Regular style={{color: '#232323', fontSize: 16}}>+998</Regular>
                        <TextInputMask
                            keyboardType={'number-pad'}
                            placeholder={'Введите Ваш номер'}
                            style={{color: '#232323', fontSize: 16, flex: 1}}
                            type={'custom'}
                            options={{
                                mask: '99 999 99 99'
                            }}
                            value={phoneNumber}
                            onChangeText={text => setPhoneNumber(text)}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Regular style={styles.auth}>Авторизуйтесь, вы полностью соглашаетесь с нашими</Regular>
                        <Bold style={styles.privacy}>правилами сервиса и Публичной афертой</Bold>
                    </View>

                </View>
            </KeyboardAvoidingView>
            <View style={{marginHorizontal: 15}}>
                <Button
                    title={'Отправить'}
                    containerStyle={{marginBottom: 20}}
                    onPress={() => navigation.navigate('RegistrationConfirmation')}
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
        marginBottom: Screen.height > 700 ? 84 : 42,
        borderRadius: 10,
        width: '100%',
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 10,
    },
    heading: {
        fontSize: Screen.width > 400 ? 20 : 15,
        marginBottom: 46
    },
    phoneIcon: {
        marginLeft: 18, marginRight: 15.73
    },
    auth: {
        color: '#858585',
        fontSize: 13,
        textAlign: 'center'
    },
    privacy: {
        color: '#858585',
        marginBottom: 50
    }
});

export default RegistrationScreen;
