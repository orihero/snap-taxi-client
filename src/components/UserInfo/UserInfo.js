import React from 'react';
import {View} from "react-native"

import styles from "./styles";
import ProfileImageIcon from "../../assets/images/ProfileImageIcon";
import {Bold, Regular} from "../Layout/AppText";
import {localization} from "../../services/Localization";

const UserInfo = ({phoneNumber, name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <ProfileImageIcon/>
            </View>
            <Regular style={{fontSize: 15}}>{name ? name : localization.yourName}</Regular>
            <Bold style={{fontSize: 18}} numberOfLines={1}>
                +{phoneNumber.slice(0, 3)} {phoneNumber.slice(3, 5)} {phoneNumber.slice(5, 8)} {phoneNumber.slice(8, 10)} {phoneNumber.slice(10, 12)}
            </Bold>
        </View>
    );
};

export default UserInfo;
