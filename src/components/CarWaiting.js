import React from 'react';
import {View, Text, Dimensions, StyleSheet} from "react-native"
import Button from "./Button";
import {DestContent} from "./SelectedDestination";
import DriverInfo from "./DriverInfo";
import Colors from "../assets/styles/Colors";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import ComingIcon from "../assets/images/ComingIcon";
import CancelTripIcon from "../assets/images/CancelTripIcon";
import WaitIcon from "../assets/images/WaitIcon";


const CarWaiting = () => {
    return (
        <>
            <View style={{marginTop: 'auto'}}>
                <DriverInfo/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.draggable}/>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 8}}>
                            <View style={styles.icon}>
                                <ComingIcon/>
                            </View>
                            <View style={[styles.icon, {marginHorizontal: 38}]}>
                                <CancelTripIcon/>
                            </View>
                            <View style={styles.icon}>
                                <WaitIcon/>
                            </View>
                        </View>
                        <View style={{transform: [{scale: 0}], height: 0}}>
                            <View style={styles.fee}>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>Цена за поездку</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 'auto'}}>35 500 </Text>
                                <Text>сум</Text>
                            </View>
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={styles.column}>
                                    <Button title={'Еще такси'} shadow/>
                                </View>
                                <View style={styles.column}>
                                    <Button title={'Отменить'} style={{backgroundColor: '#f2f2f2'}}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: Dimensions.get('window').width - 32,
        elevation: 10,
        alignSelf: 'center',
        marginBottom: 12,
        borderRadius: 15,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.background,
        paddingBottom: 23,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0,
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#EAECF1',
        paddingTop: 5
    },
    icon: {
        width: 56,
        height: 56,
        borderRadius: 100,
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        width: '48.5%'
    },
    draggable: {
        width: 40,
        height: 4,
        alignSelf: 'center',
        backgroundColor: '#2A2E43',
        opacity: .23,
        borderRadius: 100,
        marginTop: 6
    }
});

export default CarWaiting;