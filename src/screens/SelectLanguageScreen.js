import React from 'react';
import {View, TouchableWithoutFeedback, Alert, StyleSheet} from 'react-native'
import RadioButton from "../components/RadioButton";
import {Bold} from "../components/Layout/AppText";
import {localization} from "../services/Localization";
import Colors from "../assets/styles/Colors";

const SelectLanguageScreen = () => {
    const changeAppLanguage = (language) => {
        Alert.alert(
            "Изменить язык",
            "Вы уверены что хотите изменить язык?",
            [
                {
                    text: localization.cancel,
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: localization.apply, onPress: () =>localization.setLanguage(language)}
            ],
            {cancelable: false}
        );
    };
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => changeAppLanguage('ru')}
                disabled={localization.getLanguage() === 'ru'}
            >
                <View style={styles.row}>
                    <Bold style={styles.text}>Русский</Bold>
                    <RadioButton selected={localization.getLanguage() === 'ru'}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => changeAppLanguage('uz')}
                disabled={localization.getLanguage() === 'uz'}
            >
                <View style={styles.row}>
                    <Bold style={styles.text}>Uzbek</Bold>
                    <RadioButton selected={localization.getLanguage() === 'uz'}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25
    },
    row: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.border,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 15
    }
});

export default SelectLanguageScreen;
