import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, TouchableNativeFeedback} from 'react-native'
import {localization} from "../services/Localization";
import MenuIcon from "../assets/images/MenuIcon";
import WatcherIcon from "../assets/images/WatcherIcon";
import Colors from "../assets/styles/Colors";
import GradientBackground from "../assets/images/GradientBackground";
import {Bold, SemiBold} from "./Layout/AppText";
import BackButtonIcon from "../assets/images/BackButtonIcon";

const Header = ({navigation, goBack, ...rest}) => {
    useEffect(() => {
        const navListener = navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff');
        });
        return navListener
    }, [navigation]);
    return (
        <>
            <GradientBackground style={styles.gradient}/>
            <View style={styles.container} {...rest}>
                {
                    !goBack
                        ? <MenuIcon onPress={() => navigation.openDrawer()}/>
                        : <TouchableNativeFeedback
                            onPress={() => navigation.goBack()}
                            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
                        >
                            <BackButtonIcon style={{elevation: 10}}/>
                        </TouchableNativeFeedback>
                }
                <View>
                    <View style={styles.greeting}>
                        <SemiBold style={styles.goodMorning}>{localization.goodMorning}</SemiBold>
                        <SemiBold style={{color: Colors.blue}}>Александр</SemiBold>
                    </View>
                    <Bold style={styles.where}>{localization.whereAreWeGoing}</Bold>
                </View>
                <View style={styles.watcher}><WatcherIcon/></View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
    },
    greeting: {
        flexDirection: 'row',
    },
    watcher: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: 100,
        backgroundColor: Colors.background,
        borderWidth: 2,
        elevation: 10,
        borderColor: '#fff'
    },
    where: {
        color: '#232323',
        fontSize: 17,
        lineHeight: 22
    },
    gradient: {
        position: 'absolute',
        alignSelf: 'center'
    },
    goodMorning: {
        color: '#232323',
        marginRight: 6
    }
});

export default Header;
