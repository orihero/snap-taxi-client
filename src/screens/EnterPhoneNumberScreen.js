import React from 'react';
import {View, StyleSheet, TextInput, TouchableWithoutFeedback, Linking} from 'react-native'
import PhoneIcon from "../assets/images/PhoneIcon";
import {Regular, SemiBold} from "../components/Layout/AppText";
import ArrowIcon from "../assets/images/ArrowIcon";
import Colors from "../assets/styles/Colors";

const EnterPhoneNumberScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.phone}>
                <PhoneIcon style={styles.phoneIcon}/>
                <Regular style={{color: '#232323', fontSize: 16}}>+998</Regular>
                <TextInput
                    style={{color: '#232323', fontSize: 16}}
                    placeholder={'Введите номер'}
                    keyboardType={'number-pad'}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => Linking.openURL('content://com.android.contacts/contacts')}>
                <View style={styles.contact}>
                    <SemiBold style={{fontSize: 16}}>Выбрать из контактов</SemiBold>
                    <ArrowIcon/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    phone: {
        borderRadius: 10,
        height: 52,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        elevation: 5,
        marginBottom: 40,
        borderWidth: 2,
        borderColor: '#fff'
    },
    phoneIcon: {
        marginLeft: 18,
        marginRight: 15.73
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
        elevation: 5,
        borderRadius: 10,
        height: 52,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#fff'
    }
});

export default EnterPhoneNumberScreen;
