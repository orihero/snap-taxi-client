import React from 'react';
import {View, Text} from "react-native"

import styles from "./styles"
import UzcardIcon from "../../assets/images/UzcardIcon";
import ChipIcon from "../../assets/images/ChipIcon";
import {Bold} from "../Layout/AppText";
import {localization} from "../../services/Localization";

const CardBigItem = () => {
    return (
        <View style={styles.container}>
            <UzcardIcon width={19.62} height={26} style={{marginBottom: 15}}/>
            <View style={styles.cardNumber}>
                <Bold style={{fontSize: 18}}>5575</Bold>
                <Bold style={{fontSize: 18}}>7577</Bold>
                <Bold style={{fontSize: 18}}>6512</Bold>
                <Bold style={{fontSize: 18}}>6578</Bold>
            </View>
            <View style={styles.cardDetails}>
                <View>
                    <Text style={styles.cardDate}>{localization.cardDate}</Text>
                    <Bold style={styles.carDateInfo}>08/24</Bold>
                </View>
                <View>
                    <Text style={styles.phoneTitle}>{localization.phone}</Text>
                    <Bold style={styles.phone}>+998 90 755 4554</Bold>
                </View>
            </View>
            <View style={styles.cardOwnerWrapper}>
                <Bold style={styles.cardOwner}>Прокопенко Вячеслав</Bold>
                <ChipIcon style={{marginRight: 28.4}}/>
            </View>
        </View>
    );
};



export default CardBigItem;
