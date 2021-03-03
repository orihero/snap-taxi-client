import React from 'react';
import {View, TextInput, TouchableWithoutFeedback, TouchableOpacity} from "react-native"

import styles from "./styles";
import ProfileSettingsIcon from "../../assets/images/ProfileSettingsIcon";
import TrafficJamsIcon from "../../assets/images/TrafficJamsIcon";
import AcceptCallIcon from "../../assets/images/AcceptCallIcon";
import SaleIcon from "../../assets/images/SaleIcon";
import Button from "@components/Button";
import SettingsArrowIcon from "../../assets/images/SettingsArrowIcon";
import {Bold, SemiBold} from "@components/Layout/AppText";
import {localization} from "../../services/Localization";
import SwitchWithText from "@components/SwitchWithText";

const SettingsScreenView = ({setters, values, logout, routeTo, save}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ProfileSettingsIcon style={{marginRight: 23.5}}/>
                <TextInput
                    style={[styles.text, {flex: 1}]}
                    placeholder={'Ваше имя'}
                    value={values.name}
                    onChangeText={name => setters.setName(name)}
                />
            </View>
            <View style={{paddingHorizontal: 21}}>
                {/*<SwitchWithText*/}
                {/*    Icon={TrafficJamsIcon}*/}
                {/*    value={values.showTrafficJams}*/}
                {/*    setValue={setters.setShowTrafficJams}*/}
                {/*    text={localization.showTrafficJams}*/}
                {/*/>*/}
                <TouchableWithoutFeedback onPress={routeTo('SelectLanguage')}>
                    <View style={[styles.option, {justifyContent: 'space-between'}]}>
                        <Bold style={{fontSize: 15}}>{localization.appLanguage}</Bold>
                        <SettingsArrowIcon/>
                    </View>
                </TouchableWithoutFeedback>
                <SwitchWithText
                    Icon={AcceptCallIcon}
                    value={values.acceptCall}
                    setValue={setters.setAcceptCall}
                    text={localization.dontCall}
                />
                <SwitchWithText
                    Icon={SaleIcon}
                    value={values.sale}
                    setValue={setters.setSale}
                    text={localization.dontNotifySale}
                />
            </View>
            <TouchableOpacity onPress={logout} style={{margin: 25}}>
                <SemiBold style={{fontSize: 16}}>Выйти из аккаунта</SemiBold>
            </TouchableOpacity>
            <View style={{marginHorizontal: 15, marginTop: 'auto'}}>
                <Button
                    onPress={save}
                    isLoading={values.isLoading}
                    title={localization.save}
                    containerStyle={{marginBottom: 33}}
                />
            </View>
        </View>
    );
};


export default SettingsScreenView;
