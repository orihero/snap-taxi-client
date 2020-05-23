import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native'

import styles from "./styles";
import Logo from "../../assets/images/Logo";
import Colors from "../../assets/styles/Colors";

const SplashScreen = () => {
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(Colors.blue);
    }, []);
    return (
        <View style={styles.container}>
            <Logo/>
        </View>
    );
};

export default SplashScreen;
