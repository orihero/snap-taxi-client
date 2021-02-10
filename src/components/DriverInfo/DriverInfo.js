import React from 'react';
import {Image, View, Linking, TouchableNativeFeedback} from "react-native";
import {useNavigation} from "@react-navigation/native"

import styles from "./styles";
import Screen from "../../helpers/Dimensions";
import {Bold, Regular, SemiBold} from "../Layout/AppText";
import StarIcon from "../../assets/images/StarIcon";
import ChatIcon from "../../assets/images/ChatIcon";
import DriverPhoneIcon from "../../assets/images/DriverPhoneIcon";
import DriverInfoBlockBottomFragment from "../../assets/images/DriverInfoBlockBottomFragment";
import ExclamationMarkIcon from "../../assets/images/ExclamationMarkIcon";

const DriverInfo = ({finished, activeExclaim, noIcons, name, phone, car}) => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.topBlock}>
                <View style={styles.topBlockContent}>
                    <View style={styles.wrapper}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={styles.img}>
                                <Image source={require('../../assets/images/me.png')}/>
                            </View>
                            <View style={{marginRight: 18}}>
                                <Bold>{name}</Bold>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Bold>4.5</Bold>
                                    <View style={{flexDirection: 'row', marginLeft: 5.2}}>
                                        <StarIcon style={{marginRight: 2}} active/>
                                        <StarIcon style={{marginRight: 2}} active/>
                                        <StarIcon style={{marginRight: 2}} active/>
                                        <StarIcon style={{marginRight: 2}} active/>
                                        <StarIcon/>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                    <Regular style={{marginRight: 4, fontSize: 12,}}>{car && car.number}</Regular>
                                    <SemiBold style={{fontSize: 12}}>{car && car.color_name} {car && car.model}</SemiBold>
                                </View>
                            </View>
                        </View>
                        {
                            !finished && !noIcons
                                ? <View style={styles.func}>
                                    <View style={[styles.icon, {marginRight: 10}]}>
                                        <TouchableNativeFeedback onPress={() => navigation.navigate('Chat')}>
                                            <View style={styles.icon}>
                                                <ChatIcon/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={styles.icon}>
                                        <TouchableNativeFeedback onPress={() => Linking.openURL(`tel:+${phone}`)}>
                                            <View style={styles.icon}>
                                                <DriverPhoneIcon/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                                : !noIcons &&
                                <View
                                    style={{flexDirection: 'row', marginLeft: Screen.width > 400 ? 'auto' : undefined}}>
                                    <View style={styles.icon}>
                                        <TouchableNativeFeedback onPress={() => Linking.openURL('tel:+998998845881')}>
                                            <View style={styles.icon}>
                                                <ExclamationMarkIcon active={activeExclaim}/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                        }
                    </View>
                    <View>
                        <DriverInfoBlockBottomFragment
                            style={{alignSelf: 'center', position: 'absolute', bottom: -25, zIndex: 999}}
                        />
                    </View>
                </View>

            </View>
        </>
    );
};

export default DriverInfo;
