import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View, Linking, TouchableNativeFeedback} from "react-native";
import StarIcon from "../assets/images/StarIcon";
import Colors from "../assets/styles/Colors";
import ChatIcon from "../assets/images/ChatIcon";
import DriverPhoneIcon from "../assets/images/DriverPhoneIcon";
import DriverInfoBlockBottomFragment from "../assets/images/DriverInfoBlockBottomFragment";
import ExclamationMarkIcon from "../assets/images/ ExclamationMarkIcon";

const DriverInfo = ({finished, activeExclaim, noIcons}) => {
    return (
        <>
            <View style={styles.topBlock}>
                <View style={styles.topBlockContent}>
                    <View style={styles.img}>
                        <Image source={require('../assets/images/me.png')}/>
                    </View>
                    <View style={{marginRight: 18}}>
                        <Text style={{fontWeight: 'bold'}}>Мирмахмудов Фарход</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>4.5</Text>
                            <View style={{flexDirection: 'row', marginLeft: 5.2}}>
                                <StarIcon style={{marginRight: 2}} active/>
                                <StarIcon style={{marginRight: 2}} active/>
                                <StarIcon style={{marginRight: 2}} active/>
                                <StarIcon style={{marginRight: 2}} active/>
                                <StarIcon/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>01 А <Text style={{fontWeight: 'bold'}}>596</Text> BС </Text>
                            <Text>Белая Лассети</Text>
                        </View>
                    </View>
                    {
                        !finished && !noIcons
                            ? <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                                <View style={[styles.icon, {marginRight: 10}]}>
                                    <TouchableNativeFeedback onPress={() => Linking.openURL('sms:+998998845881')}>
                                        <View style={styles.icon}>
                                            <ChatIcon/>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                                <View style={styles.icon}>
                                    <TouchableNativeFeedback onPress={() => Linking.openURL('tel:+998998845881')}>
                                        <View style={styles.icon}>
                                            <DriverPhoneIcon/>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                            : !noIcons && <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
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
                <DriverInfoBlockBottomFragment style={{alignSelf: 'center', marginTop: -2}}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    topBlock: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        top: 6,
        elevation: 10,
    },
    topBlockContent: {
        borderRadius: 15,
        backgroundColor: Colors.background,
        paddingHorizontal: 8,
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff',
    },
    img: {
        borderRadius: 100,
        borderWidth: 2,
        width: 50,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#EDEEF2',
        backgroundColor: '#fff',
        elevation: 5,
        marginRight: 4
    },
    icon: {
        width: 44,
        height: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#fff',
        overflow: 'hidden'
    }
});

export default DriverInfo;