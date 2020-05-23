import React, {useEffect} from 'react';
import {View, StatusBar, TouchableNativeFeedback} from 'react-native'
import styles from "./styles";

import {localization} from "../../services/Localization";
import MenuIcon from "../../assets/images/MenuIcon";
import Colors from "../../assets/styles/Colors";
import GradientBackground from "../../assets/images/GradientBackground";
import {Bold, SemiBold} from "../Layout/AppText";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import NotificationsIcon from "../../assets/images/NotificationsIcon";

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
                        <Bold style={{color: Colors.blue, fontSize: 16}}>Александр</Bold>
                    </View>
                    <Bold style={styles.where}>{localization.whereAreWeGoing}</Bold>
                </View>
                <View style={{borderRadius: 100, overflow: 'hidden', elevation: 5}}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Notifications')}>
                        <View style={styles.watcher}><NotificationsIcon style={{left: 14}}/></View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </>
    );
};

export default Header;
