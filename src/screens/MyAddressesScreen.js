import React from 'react';
import {View, Text, StyleSheet, Dimensions} from "react-native"
import MyAddressesIcon from "../assets/images/MyAddressesIcon";
import HomeIcon from "../assets/images/HomeIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import BagIcon from "../assets/images/BagIcon";
import CartIcon from "../assets/images/CartIcon";
import {Bold, Light} from "../components/Layout/AppText";

const MyAddressesScreen = () => {
    return (
        <View>
            <MyAddressesIcon style={styles.topIcon}/>
            <View style={styles.container}>
                <View style={styles.addressItem}>
                    <HomeIcon style={styles.icon}/>
                    <View>
                        <Light style={{color: '#AAAEB7'}}>Дом</Light>
                        <Bold style={{fontWeight: 'bold'}}>Саид барака 6</Bold>
                    </View>
                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                </View>
                <View style={styles.addressItem}>
                    <BagIcon style={styles.icon}/>
                    <View>
                        <Light style={{color: '#AAAEB7'}}>Работа</Light>
                        <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                    </View>
                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                </View>
                <View style={styles.addressItem}>
                    <CartIcon style={styles.icon}/>
                    <View>
                        <Light style={{color: '#AAAEB7'}}>Дом</Light>
                        <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                    </View>
                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topIcon: {
        alignSelf: 'center',
        marginBottom: 35,
        display: Dimensions.get('window').height > 700 ? 'flex' : 'none'
    },
    container: {
        marginHorizontal: 30
    },
    addressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1,
        marginBottom: 16
    },
    icon: {
        marginRight: 15.3,

    }
});

export default MyAddressesScreen;