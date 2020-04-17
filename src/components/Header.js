import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import MenuIcon from "../assets/images/MenuIcon";
import WatcherIcon from "../assets/images/WatcherIcon";
import Colors from "../assets/styles/Colors";
import BackButtonIcon from "../assets/images/BackButtonIcon";

const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
            <MenuIcon/>
            {/*<BackButtonIcon/>*/}
            <View>
                <View style={styles.greeting}>
                    <Text style={{color: '#232323', marginRight: 6}}>Доброе утро</Text>
                    <Text style={{color: Colors.blue}}>Александр</Text>
                </View>
                <Text style={{color: '#232323', fontSize: 17, fontWeight: 'bold', lineHeight: 20}}>Куда мы едем?</Text>
            </View>
            <View style={styles.watcher}><WatcherIcon/></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255, .6)',
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
        backgroundColor: '#fff'
    }
});

export default Header;