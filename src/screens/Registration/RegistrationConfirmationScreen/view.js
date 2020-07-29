import React, {useState, useEffect} from 'react';
import {View, TextInput, KeyboardAvoidingView, StatusBar, TouchableOpacity} from "react-native";
import {connect} from "react-redux";

import Colors from "../../../assets/styles/Colors";
import Button from "../../../components/Button";
import ConfirmationIcon from "../../../assets/images/ConfirmationIcon";
import RegistrationTop from "../../../components/RegistrationTop/RegistrationTop";
import {Bold, SemiBold} from "../../../components/Layout/AppText";
import styles from "./styles";
import {bindActionCreators} from "redux";
import auth from "../../../store/actions/auth";

const RegistrationConfirmationScreenView = ({handleSubmit, resend, counter, setCode, isLoading}) => {
    return (
        <View style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
                <StatusBar backgroundColor={Colors.blue}/>
                <RegistrationTop/>
                <View style={styles.registrationContainer}>
                    <View>
                        <SemiBold>Пожалуйста, введите код, </SemiBold>
                        <Bold style={styles.heading}>который мы прислали по SMS</Bold>
                    </View>
                    <View style={styles.registrationForm}>
                        <ConfirmationIcon style={styles.icon}/>
                        <TextInput
                            onChangeText={text => setCode(text)}
                            style={styles.input}
                            placeholder={'Введите код'}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    {
                        counter
                            ? <View style={styles.bottom}>
                                <Bold style={styles.confirm}>Запросить новый код через</Bold>
                                <Bold style={styles.time}>&nbsp;&nbsp;{counter} сек</Bold>
                            </View>
                            : <TouchableOpacity onPress={resend}>
                                <Bold style={styles.confirm}>Запросить новый код</Bold>
                            </TouchableOpacity>
                    }
                </View>
            </KeyboardAvoidingView>
            <View style={{marginHorizontal: 15}}>
                <Button
                    isLoading={isLoading}
                    onPress={handleSubmit}
                    title={'Отправить'}
                    containerStyle={{marginBottom: 20}}
                />
            </View>
        </View>
    );
};

export default RegistrationConfirmationScreenView;
