import React, {useEffect} from 'react';
import {StatusBar, TouchableNativeFeedback, View} from 'react-native'
import styles from "./styles";
import {connect} from "react-redux";
import {useNavigation} from "@react-navigation/native";

import {localization} from "../../services/Localization";
import MenuIcon from "../../assets/images/MenuIcon";
import Colors from "../../assets/styles/Colors";
import GradientBackground from "../../assets/images/GradientBackground";
import {Bold, SemiBold} from "../Layout/AppText";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import NotificationsIcon from "../../assets/images/NotificationsIcon";
import TouchablePlatformSpecific from "../TouchablePlatformSpecific";

const Header = ({goBack, user, subText, ...rest}) => {

    const navigation = useNavigation();

    useEffect(() => {
        return navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff');
        })
    }, [navigation]);
    return (
        <>
            <GradientBackground style={styles.gradient}/>
            <View style={styles.container} {...rest}>
                {
                    !goBack
                        ? <MenuIcon onPress={() => navigation.openDrawer()}/>
                        : <TouchablePlatformSpecific
                            onPress={() => navigation.goBack()}
                            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
                        >
                            <View>
                                <BackButtonIcon style={{elevation: 10}}/>
                            </View>
                        </TouchablePlatformSpecific>
                }
                <View>
                    <View style={styles.greeting}>
                        <SemiBold style={styles.goodMorning}>
                            {localization.goodMorning}
                        </SemiBold>
                        <Bold style={{color: Colors.blue, fontSize: 16}}>{user.name ? user.name : 'Пользователь'}</Bold>
                    </View>
                    <Bold style={styles.where}>{subText}</Bold>
                </View>
                <View style={{borderRadius: 100, overflow: 'hidden', elevation: 5}}>
                    <TouchablePlatformSpecific onPress={() => navigation.navigate('Notifications')}>
                        <View style={styles.watcher}>
                            <NotificationsIcon style={{left: 14}}/>
                        </View>
                    </TouchablePlatformSpecific>
                </View>
            </View>
        </>
    );
};

const mapStateToProps = ({user}) => ({
    user: user.data
});

export default connect(mapStateToProps)(Header);
