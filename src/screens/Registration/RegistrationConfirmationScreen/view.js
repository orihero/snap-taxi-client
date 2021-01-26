import React from 'react';
import {View, TextInput, KeyboardAvoidingView, TouchableOpacity} from "react-native";

import Button from "../../../components/Button";
import ConfirmationIcon from "../../../assets/images/ConfirmationIcon";
import RegistrationTop from "../../../components/RegistrationTop/RegistrationTop";
import {Bold, SemiBold} from "../../../components/Layout/AppText";
import styles from "./styles";

const RegistrationConfirmationScreenView = ({handleSubmit,code, resend, counter, setCode, isLoading}) => {
    return (
        <View style={{flex: 1}}>
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={'position'}
            >
                <RegistrationTop/>
                <View style={styles.registrationContainer}>
                    <View>
                        <SemiBold>Пожалуйста, введите код, </SemiBold>
                        <Bold style={styles.heading}>Который мы прислали по SMS</Bold>
                    </View>
                    <View style={styles.registrationForm}>
                        <ConfirmationIcon style={styles.icon}/>
                        <TextInput
                            value={code}
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
