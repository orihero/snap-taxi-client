import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import MyAddressesIcon from "../components/MyAddressesIcon";
import HomeIcon from "../assets/images/HomeIcon";
import ArrowIcon from "../assets/images/ArrowIcon";
import BagIcon from "../assets/images/BagIcon";
import CartIcon from "../assets/images/CartIcon";

const MyAddressesScreen = () => {
    return (
        <View>
            <MyAddressesIcon style={styles.topIcon}/>
            <View style={styles.container}>
                <View style={styles.addressItem}>
                    <HomeIcon style={styles.icon}/>
                    <View>
                        <Text style={{color: '#AAAEB7'}}>Дом</Text>
                        <Text style={{fontWeight: 'bold'}}>Саид барака 6</Text>
                    </View>
                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                </View>
                <View style={styles.addressItem}>
                    <BagIcon style={styles.icon}/>
                    <View>
                        <Text style={{color: '#AAAEB7'}}>Работа</Text>
                        <Text style={{fontWeight: 'bold'}}>Саларская набережаная 35</Text>
                    </View>
                    <ArrowIcon style={{marginLeft: 'auto'}}/>
                </View>
                <View style={styles.addressItem}>
                    <CartIcon style={styles.icon}/>
                    <View>
                        <Text style={{color: '#AAAEB7'}}>Дом</Text>
                        <Text style={{fontWeight: 'bold'}}>Саларская набережаная 35</Text>
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
        marginBottom: 35
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
        marginRight: 15.3
    }
});

export default MyAddressesScreen;