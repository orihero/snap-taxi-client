import React from 'react';
import {View} from 'react-native'

import styles from "./styles";
import Logo from "../../assets/images/Logo";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Logo/>
        </View>
    );
};

export default SplashScreen;
