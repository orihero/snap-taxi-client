import React from 'react';
import {View, Text, Dimensions, StyleSheet} from "react-native"
import Button from "./Button";
import {DestContent} from "./SelectedDestination";
import DriverInfo from "./DriverInfo";
import Colors from "../assets/styles/Colors";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import {connect} from "react-redux";
import {ORDER} from "../store/constants/Taxi";


const CarOrder = ({dispatch}) => {
    setTimeout(() => dispatch({type: ORDER.FULFILL}), 7000);
    return (
        <>
            <View style={{marginTop: 'auto'}}>
                <DriverInfo/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.fee}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>Цена за поездку</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 'auto'}}>35 500</Text>
                            <Text>сум</Text>
                        </View>
                        <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                        <Button title={'Отменить поездку'}/>
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
    }
});

export default connect()(CarOrder);