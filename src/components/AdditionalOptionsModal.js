import React, {useState} from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from "react-native"

import CustomModal from "./CustomModal";
import Button from "./Button";
import AdditionalOptionsModalIcon from "../assets/images/AdditionalOptionsModalIcon";
import {DestContent} from "./SelectedDestination";
import AirConditionIcon from "../assets/images/AirConditionIcon";
import SmokeIcon from "../assets/images/SmokeIcon";
import Colors from "../assets/styles/Colors";
import {Bold} from "./Layout/AppText";
import Screen from "../helpers/Dimensions";
import {localization} from "../services/Localization";
import SwitchWithText from "./SwitchWithText";

const AdditionalOptionsModal = ({visible, closeModal}) => {
    const [airCondition, setAirCondition] = useState(false);
    const [smoke, setSmoke] = useState(false);
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <KeyboardAvoidingView behavior={'position'}>
                <View>
                    <AdditionalOptionsModalIcon style={styles.icon}/>
                    <Bold style={styles.heading}>{localization.yourDesire}</Bold>
                    <DestContent containerStyle={{marginHorizontal: 10}} textStyle={{fontSize: 15}}/>
                    <View style={{marginHorizontal: 10}}>
                        <SwitchWithText
                            style={{borderTopWidth: 1}}
                            Icon={AirConditionIcon}
                            text={localization.airCondition}
                            setValue={setAirCondition}
                            value={airCondition}
                        />
                        <SwitchWithText
                            Icon={SmokeIcon}
                            text={localization.forSmokers}
                            setValue={setSmoke}
                            value={smoke}
                        />
                    </View>
                    <View style={styles.textarea}>
                        <TextInput
                            multiline={true}
                            placeholder={localization.comment}
                        />
                    </View>
                </View>
                <Button
                    onPress={closeModal}
                    title={localization.understandable}
                />
            </KeyboardAvoidingView>
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        marginBottom: 21.7,
        display: Screen.height > 700 ? 'flex' : 'none'
    },
    fz: {
        fontSize: Screen.width > 400 ? 14 : 13
    },
    heading: {
        fontSize: Screen.width > 400 ? 22 : 18,
        alignSelf: 'center',
        marginBottom: 11
    },
    textarea: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        height: 80,
        marginHorizontal: 10,
        marginTop: 13,
        marginBottom: 40
    }
});

export default AdditionalOptionsModal;
