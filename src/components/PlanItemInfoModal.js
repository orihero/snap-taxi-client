import React from 'react';
import {View, StyleSheet, Dimensions} from "react-native"
import CustomModal from "./CustomModal";
import CarModalIcon from "../assets/images/CarModalIcon";
import Button from "./Button";
import {Bold, Regular} from "./Layout/AppText";
import Screen from "../helpers/Dimensions";
import {localization} from "../services/Localization";

const Description = ({leftText, rightText}) => (
    <View style={styles.textContainer}>
        <Regular style={{fontSize: 15, color: '#AAAEB7'}}>{leftText}</Regular>
        <Bold style={{fontSize: 15}}>{rightText}</Bold>
    </View>
);

const PlanItemInfoModal = ({visible, closeModal}) => {
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <CarModalIcon style={styles.icon}/>
            <Bold style={styles.heading}>{localization.planInfo}</Bold>
            <Description leftText={localization.car} rightText={'Белая Лассети'}/>
            <Description leftText={localization.plan} rightText={'Комфорт'}/>
            <Description leftText={localization.costPerKm} rightText={'5000 сум'}/>
            <Description leftText={localization.costForWait} rightText={'500 сум'}/>
            <Button
                onPress={closeModal}
                title={localization.understandable}
                style={{marginBottom: 26,}}
            />
        </CustomModal>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: Screen.width > 400 ? 22 : 18,
        alignSelf: 'center',
        marginBottom: 48,
        marginTop:  Screen.height > 700 ? 0 : 40
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 6,
        paddingBottom: 12,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        marginBottom: 21.7,
        display: Screen.height > 700 ? 'flex' : 'none'
    }
});

export default PlanItemInfoModal;
