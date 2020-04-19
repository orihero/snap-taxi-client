import React, {useState} from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from "react-native"
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Button from "./Button";
import {DestContent} from "./SelectedDestination";
import DriverInfoBlockBottomFragment from "../assets/images/DriverInfoBlockBottomFragment";
import StarIcon from "../assets/images/StarIcon";
import Colors from "../assets/styles/Colors";
import ChatIcon from "../assets/images/ChatIcon";
import DriverPhoneIcon from "../assets/images/DriverPhoneIcon";

const CarOrder = () => {
    return (
        <>
            <View style={{marginTop: 'auto'}}>
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
                                    <StarIcon color={Colors.yellow}/>
                                    <StarIcon color={Colors.yellow}/>
                                    <StarIcon color={Colors.yellow}/>
                                    <StarIcon color={Colors.yellow}/>
                                    <StarIcon/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>01 А <Text style={{fontWeight: 'bold'}}>596</Text> BС </Text>
                                <Text>Белая Лассети</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                            <View
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 5,
                                    backgroundColor: '#fff',
                                    marginRight: 10
                                }}
                            >
                                <ChatIcon/>
                            </View>
                            <View
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 5,
                                    backgroundColor: '#fff'
                                }}
                            >
                                <DriverPhoneIcon/>
                            </View>
                        </View>
                    </View>
                    <DriverInfoBlockBottomFragment style={{alignSelf: 'center', marginTop: -1}}/>
                </View>
                <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: 11,
                        borderBottomWidth: 1,
                        borderBottomColor: '#EAECF1',
                        paddingTop: 5
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Цена за поездку</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 'auto'}}>35 500 </Text>
                        <Text>сум</Text>
                    </View>
                    <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                    <Button title={'Отменить поездку'}/>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginBottom: 12,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 23,
        paddingHorizontal: 20,
    },
    topBlock: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        top: 6
    },
    topBlockContent: {
        borderRadius: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems: 'center'
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
    }
});

export default CarOrder;