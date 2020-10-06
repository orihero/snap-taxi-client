import React from 'react';
import {View, TouchableOpacity} from 'react-native'
import {connect} from "react-redux";

import styles from "./styles";
import RadioButton from "../../components/RadioButton/RadioButton";
import {Bold} from "../../components/Layout/AppText";
import {localization} from "../../services/Localization";
import {bindActionCreators} from "redux";
import User from "../../store/actions/user";

const SelectLanguageScreen = ({language, SetLanguage}) => {

    const changeAppLanguage = (language) => {
        SetLanguage(language);
        localization.setLanguage(language);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => changeAppLanguage('ru')}
            >
                <View style={styles.row}>
                    <Bold style={styles.text}>Русский</Bold>
                    <RadioButton selected={language === 'ru'}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => changeAppLanguage('en')}
            >
                <View style={styles.row}>
                    <Bold style={styles.text}>English</Bold>
                    <RadioButton selected={language === 'en'}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = ({user: {language}}) => ({
    language
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    SetLanguage: User.SetLanguage
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectLanguageScreen);
