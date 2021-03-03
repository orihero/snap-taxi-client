import React from 'react';
import {View} from "react-native"

import styles from "./styles";
import CustomModal from "../CustomModal/CustomModal";
import CarModalIcon from "../../assets/images/CarModalIcon";
import Button from "../Button";
import {Bold, Regular} from "../Layout/AppText";
import {localization} from "../../services/Localization";

const Description = ({leftText, rightText}) => (
    <View style={styles.textContainer}>
        <Regular style={{fontSize: 15, color: '#AAAEB7'}}>{leftText}</Regular>
        <Bold style={{fontSize: 15}}>{rightText}</Bold>
    </View>
);

const PlanItemInfoModal = ({visible, closeModal, rateInfo}) => {
    return (
        <CustomModal visible={visible} closeModal={closeModal}>
            <CarModalIcon style={styles.icon}/>
            <Bold style={styles.heading}>{localization.planInfo}</Bold>
            {/*<Description leftText={localization.car} rightText={'Белая Лассети'}/>*/}
            <Description leftText={localization.plan} rightText={rateInfo.title}/>
            <Description leftText={localization.costPerKm} rightText={`${rateInfo.price_per_km} сум`}/>
            <Description leftText={localization.costForWait} rightText={`${rateInfo.price_per_min} сум`}/>
            <Button
                onPress={closeModal}
                title={localization.understandable}
                style={{marginBottom: 26,}}
            />
        </CustomModal>
    );
};


export default PlanItemInfoModal;
