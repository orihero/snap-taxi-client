import React, {useEffect} from 'react';
import {View, TouchableNativeFeedback, StatusBar, StyleSheet} from "react-native"
import BackButtonIcon from "../assets/images/BackButtonIcon";
import Colors from "../assets/styles/Colors";
import {Bold} from "./Layout/AppText";

const PageHeader = ({title, navigation, style}) => {
    useEffect(() => {
        const navListener = navigation.addListener('focus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(Colors.blue);
        });
        return navListener
    }, [navigation]);
    return (
        <View style={[styles.container, style]}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.blue} animated={true}/>
            <View style={styles.header}>
                <TouchableNativeFeedback
                    onPress={() => navigation.goBack()}
                    background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
                >
                    <View style={{position: 'absolute', left: 16}}>
                        <BackButtonIcon/>
                    </View>
                </TouchableNativeFeedback>

                <Bold style={styles.title}>{title}</Bold>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 34,
        backgroundColor: Colors.blue,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        marginBottom: 35,
        zIndex: -1
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
});

export default PageHeader;