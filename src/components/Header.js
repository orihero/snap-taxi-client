import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import MenuIcon from "../assets/images/MenuIcon";
import WatcherIcon from "../assets/images/WatcherIcon";
import Colors from "../assets/styles/Color";

const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
            <MenuIcon/>
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
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 16
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