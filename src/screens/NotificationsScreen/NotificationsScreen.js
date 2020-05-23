import React from 'react';
import {View} from 'react-native'

import styles from "./styles";
import {SemiBold} from "../../components/Layout/AppText";
import Colors from "../../assets/styles/Colors";

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <SemiBold style={{color: Colors.grey}}>Увас пока нет уведомлений</SemiBold>
        </View>
    );
};


export default NotificationsScreen;
