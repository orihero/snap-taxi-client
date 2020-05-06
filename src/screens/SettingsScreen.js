import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableWithoutFeedback} from "react-native"
import ProfileSettingsIcon from "../assets/images/ProfileSettingsIcon";
import Colors from "../assets/styles/Colors";
import TrafficJamsIcon from "../assets/images/TrafficJamsIcon";
import AcceptCallIcon from "../assets/images/AcceptCallIcon";
import SaleIcon from "../assets/images/SaleIcon";
import Button from "../components/Button";
import SettingsArrowIcon from "../assets/images/SettingsArrowIcon";
import {Bold} from "../components/Layout/AppText";
import Screen from "../helpers/Dimensions";
import {localization} from "../services/Localization";
import {useNavigation} from "@react-navigation/native"

const TextWithIcon = ({active, Icon, children}) => (
    <>
        <Icon style={{marginRight: 20}} color={active ? Colors.blue : '#000'}/>
        <Bold style={{
            color: active ? Colors.blue : '#000',
            fontSize: Screen.width > 400 ? 15 : 13,
            width: '70%'
        }}>{children}</Bold>
    </>
);

const CustomSwitch = ({value, onValueChange}) => (
    <Switch
        trackColor={{false: '#ECECEC', true: '#ECECEC'}}
        thumbColor={value ? Colors.blue : "#ECECEC"}
        style={{marginLeft: 'auto'}}
        value={value}
        onValueChange={onValueChange}
    />
);

const SettingsScreen = () => {
    const navigation = useNavigation()
    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(false);
    const [sale, setSale] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ProfileSettingsIcon style={{marginRight: 23.5}}/>
                <Text style={styles.text}>Алексей</Text>
            </View>
            <View style={styles.option}>
                <TextWithIcon Icon={TrafficJamsIcon}
                              active={showTrafficJams}>{localization.showTrafficJams}</TextWithIcon>
                <CustomSwitch value={showTrafficJams} onValueChange={() => setShowTrafficJams(!showTrafficJams)}/>
            </View>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate('SelectLanguage')} >
                <View style={[styles.option, {justifyContent: 'space-between'}]}>
                    <Bold style={{fontSize: 15}}>{localization.appLanguage}</Bold>
                    <SettingsArrowIcon/>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.option}>
                <TextWithIcon Icon={AcceptCallIcon} active={acceptCall}>{localization.dontCall}</TextWithIcon>
                <CustomSwitch value={acceptCall} onValueChange={() => setAcceptCall(!acceptCall)}/>
            </View>
            <View style={styles.option}>
                <TextWithIcon Icon={SaleIcon} active={sale}>{localization.dontNotifySale}</TextWithIcon>
                <CustomSwitch value={sale} onValueChange={() => setSale(!sale)}/>
            </View>
            <Button
                title={localization.clearCashCard}
                containerStyle={{marginBottom: 50}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
    },
    row: {
        padding: 12.5,
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
        marginHorizontal: 6,
        alignItems: 'center',
        paddingVertical: 14,
        borderColor: '#EAECF1',
        borderBottomWidth: 1,
    }
});

export default SettingsScreen;
