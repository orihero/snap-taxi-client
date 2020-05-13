import React from 'react';
import {View, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Light, Regular} from "../components/Layout/AppText";
import Colors from "../assets/styles/Colors";
import Button from "../components/Button";
import {localization} from "../services/Localization";
import LocationIcon from "../assets/images/LocationIcon";

const AddAddressScreen = () => {
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
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        placeholder={'Впишите адрес'}
                        placeholderTextColor={'#000'}
                        style={styles.input}
                    />
                    <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
                        <Regular>{localization.map}</Regular>
                        <LocationIcon style={{marginLeft: 10.46}}/>
                    </View>
                </View>
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

export default AddAddressScreen;
