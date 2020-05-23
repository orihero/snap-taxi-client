import React from 'react';
import {View, TextInput,KeyboardAvoidingView} from 'react-native'

import styles from "./styles";
import {Light} from "../../components/Layout/AppText";
import Button from "../../components/Button";

const ChangeAddressScreen = () => {
    return (
        <KeyboardAvoidingView behavior={'height'} style={styles.container}>
            <View style={styles.inputWrapper}>
                <Light>Название</Light>
                <TextInput
                    placeholder={'Напишите названия'}
                    placeholderTextColor={'#000'}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Light>Адрес</Light>
                <TextInput
                    placeholder={'Впишите адрес'}
                    placeholderTextColor={'#000'}
                    style={styles.input}
                />
            </View>
            <Button title={'Добавить'} containerStyle={{marginBottom: 33}}/>
        </KeyboardAvoidingView>
    );
};


export default ChangeAddressScreen;
