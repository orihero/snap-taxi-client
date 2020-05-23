import React from 'react';
import {View, TextInput} from "react-native"

import styles from "./styles";
import DiscountIcon from "../../assets/images/DiscountIcon";
import Button from "../../components/Button";
import {localization} from "../../services/Localization";

const DiscountsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <DiscountIcon style={{marginRight: 18}}/>
                <TextInput style={styles.text} placeholder={localization.enterPromoCode}/>
            </View>
            <Button
                title={localization.apply}
                containerStyle={{marginBottom: 50}}
            />
        </View>
    );
};

export default DiscountsScreen;
