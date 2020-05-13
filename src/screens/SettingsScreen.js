import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from "react-native"
import ProfileSettingsIcon from "../assets/images/ProfileSettingsIcon";
import Colors from "../assets/styles/Colors";
import TrafficJamsIcon from "../assets/images/TrafficJamsIcon";
import AcceptCallIcon from "../assets/images/AcceptCallIcon";
import SaleIcon from "../assets/images/SaleIcon";
import Button from "../components/Button";
import SettingsArrowIcon from "../assets/images/SettingsArrowIcon";
import {Bold} from "../components/Layout/AppText";
import {localization} from "../services/Localization";
import SwitchWithText from "../components/SwitchWithText";

const SettingsScreen = ({navigation}) => {

    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(false);
    const [sale, setSale] = useState(false);
    const [name, setName] = useState('Sylvester Stallone');

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <View style={styles.row}>
                <ProfileSettingsIcon style={{marginRight: 23.5}}/>
                <TextInput
                    style={[styles.text, {flex: 1}]}
                    value={name}
                    onChangeText={name => setName(name)}
                />
            </View>
            <View style={{paddingHorizontal: 21}}>
                <SwitchWithText
                    Icon={TrafficJamsIcon}
                    value={showTrafficJams}
                    setValue={setShowTrafficJams}
                    text={localization.showTrafficJams}
                />
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SelectLanguage')}>
                    <View style={[styles.option, {justifyContent: 'space-between'}]}>
                        <Bold style={{fontSize: 15}}>{localization.appLanguage}</Bold>
                        <SettingsArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <SwitchWithText
                    Icon={AcceptCallIcon}
                    value={acceptCall}
                    setValue={setAcceptCall}
                    text={localization.dontCall}
                />
                <SwitchWithText
                    Icon={SaleIcon}
                    value={sale}
                    setValue={setSale}
                    text={localization.dontNotifySale}
                />
            </View>
            <View style={{marginHorizontal: 15, marginTop: 'auto'}}>
                <Button
                    title={localization.save}
                    containerStyle={{marginBottom: 33}}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        marginHorizontal: 15,
        height: 52,
        paddingHorizontal: 12.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        marginBottom: 19,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff'
    },
    text: {
        fontSize: 16,
        color: '#858585'
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1,
    },
});

export default SettingsScreen;
