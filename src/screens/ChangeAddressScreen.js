import React from 'react';
import {View, TextInput,KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Light} from "../components/Layout/AppText";
import Colors from "../assets/styles/Colors";
import Button from "../components/Button";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    inputWrapper: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1
    },
    input: {
        fontWeight: 'bold',
        color: '#000',
        padding: 0
    }
});

export default ChangeAddressScreen;
