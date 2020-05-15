import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native'
import Logo from "../assets/images/Logo";
import Colors from "../assets/styles/Colors";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.blue
    }
});

export default SplashScreen;
