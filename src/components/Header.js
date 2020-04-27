import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native'
import MenuIcon from "../assets/images/MenuIcon";
import WatcherIcon from "../assets/images/WatcherIcon";
import Colors from "../assets/styles/Colors";
import GradientBackground from "../assets/images/GradientBackground";
import {Bold, SemiBold} from "./Layout/AppText";
import BackButtonIcon from "../assets/images/BackButtonIcon";

const Header = ({navigation, ...rest}) => {
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
                <MenuIcon onPress={() => navigation.openDrawer()}/>
                {/*<BackButtonIcon/>*/}
                <View>
                    <View style={styles.greeting}>
                        <SemiBold style={styles.goodMorning}>Доброе утро</SemiBold>
                        <SemiBold style={{color: Colors.blue}}>Александр</SemiBold>
                    </View>
                    <Bold style={styles.where}>Куда мы едем?</Bold>
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