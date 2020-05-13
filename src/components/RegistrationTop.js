import React, {useEffect} from 'react';
import CloudIcon from "../assets/images/CloudIcon";
import {Dimensions, StatusBar, StyleSheet, View} from "react-native";
import Logo from "../assets/images/Logo";
import Colors from "../assets/styles/Colors";
import {useNavigation} from "@react-navigation/native"

const CloudIcons = () => (
    <>
        <CloudIcon height={32.37} width={50.24} style={{top: 20, right: 15.26}}/>
        <CloudIcon height={42.65} width={76.74} style={{bottom: 198.35, left: 86}}/>
        <CloudIcon height={37.24} width={67} style={{bottom: 83.76, left: 20}}/>
        <CloudIcon height={60.58} width={109} style={{bottom: 23.35, right: 28}}/>
    </>
);

const RegistrationTop = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const navListener = navigation.addListener('focus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(Colors.blue);
        });
        return navListener
    }, [navigation]);
    return (
        <View style={styles.top}>
            { Dimensions.get('window').height > 700 && <CloudIcons/>}
            <Logo style={styles.logo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    top: {
        backgroundColor: Colors.blue,
        height: Dimensions.get('window').height > 700 ? Dimensions.get('window').height * 0.4 : 150,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'flex-end',
        marginBottom: Dimensions.get('window').height > 700 ? 109.18 : 50
    },
});


export default RegistrationTop;
