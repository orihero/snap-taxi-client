import React from 'react';
import {View, Dimensions, StyleSheet} from "react-native"
import Button from "./Button";
import {DestContent} from "./SelectedDestination";
import DriverInfo from "./DriverInfo";
import Colors from "../assets/styles/Colors";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import {localization} from "../services/Localization";
import {useNavigation} from "@react-navigation/native";
import {Bold, Regular} from "./Layout/AppText";
import Screen from "../helpers/Dimensions";


const CarOrder = ({dispatch}) => {
    setTimeout(() => navigation.navigate('CarWaiting'), 7000);
    const navigation = useNavigation();
    return (
        <>
            <View style={{marginTop: 'auto'}}>
                <DriverInfo/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Screen.width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.fee}>
                            <Bold style={{fontSize: 17}}>{localization.fee}</Bold>
                            <Bold style={{fontSize: 17, marginLeft: 'auto'}}>35 500 </Bold>
                            <Regular style={{lineHeight: 25}}>сум</Regular>
                        </View>
                        <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                        <Button title={localization.cancelTrip} onPress={() => navigation.navigate("Home")}/>
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

export default CarOrder;
