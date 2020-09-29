import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native'

import styles from "./styles";
import RadioButton from "../../components/RadioButton/RadioButton";
import {Bold} from "../../components/Layout/AppText";
import {localization} from "../../services/Localization";

const SelectLanguageScreen = () => {
    const changeAppLanguage = (language) => {
        localization.setContent(language)
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
                onPress={() => changeAppLanguage('eng')}
                disabled={localization.getLanguage() === 'eng'}
            >
                <View style={styles.row}>
                    <Bold style={styles.text}>English</Bold>
                    <RadioButton selected={localization.getLanguage() === 'eng'}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SelectLanguageScreen;
