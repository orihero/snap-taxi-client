import React from 'react';
import {View, TouchableWithoutFeedback} from "react-native"

import styles from "./styles";
import MyAddressesIcon from "../../assets/images/MyAddressesIcon";
import HomeIcon from "../../assets/images/HomeIcon";
import ArrowIcon from "../../assets/images/ArrowIcon";
import BagIcon from "../../assets/images/BagIcon";
import CartIcon from "../../assets/images/CartIcon";
import {Bold, Light} from "../../components/Layout/AppText";
import Button from "../../components/Button";
import {localization} from "../../services/Localization";

const MyAddressesScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <MyAddressesIcon style={styles.topIcon}/>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ChangeAddress')}>
                    <View style={styles.addressItem}>
                        <HomeIcon style={styles.icon}/>
                        <View>
                            <Light style={{color: '#AAAEB7'}}>Дом</Light>
                            <Bold style={{fontWeight: 'bold'}}>Саид барака 6</Bold>
                        </View>
                        <ArrowIcon style={{marginLeft: 'auto'}}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ChangeAddress')}>
                    <View style={styles.addressItem}>
                        <BagIcon style={styles.icon}/>
                        <View>
                            <Light style={{color: '#AAAEB7'}}>Работа</Light>
                            <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                        </View>
                        <ArrowIcon style={{marginLeft: 'auto'}}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ChangeAddress')}>
                    <View style={styles.addressItem}>
                        <CartIcon style={styles.icon}/>
                        <View>
                            <Light style={{color: '#AAAEB7'}}>Дом</Light>
                            <Bold style={{fontWeight: 'bold'}}>Саларская набережаная 35</Bold>
                        </View>
                        <ArrowIcon style={{marginLeft: 'auto'}}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={{marginTop: 'auto', marginBottom: 50, marginHorizontal: 15}}>
                <Button
                    onPress={() => navigation.navigate('AddAddress')}
                    title={localization.addAddress}
                />
            </View>
        </View>
    );
};


export default MyAddressesScreen;
