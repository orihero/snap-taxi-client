import React from 'react';
import {View, Animated} from "react-native"

import styles from "./styles";
import ProfileImageIcon from "../../assets/images/ProfileImageIcon";
import {Bold, Regular} from "../Layout/AppText";

const UserInfo = () => {
    return (
        <View style={styles.container}>
            <Animated.View style={styles.imgWrapper}>
                <ProfileImageIcon/>
            </Animated.View>
            <Regular style={{fontSize: 15}}>Алексей</Regular>
            <Bold style={{fontSize: 18}} numberOfLines={1}>+998 90 377 33 85</Bold>
        </View>
    );
};

export default UserInfo;
