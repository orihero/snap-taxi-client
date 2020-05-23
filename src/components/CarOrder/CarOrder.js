import React from 'react';
import {View} from "react-native"

import styles from "./styles";
import Button from "../Button";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";
import DriverInfo from "../DriverInfo/DriverInfo";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import {localization} from "../../services/Localization";
import {useNavigation} from "@react-navigation/native";
import {Bold, Regular} from "../Layout/AppText";
import Screen from "../../helpers/Dimensions";


const CarOrder = (props) => {
    const navigation = useNavigation();
    setTimeout(() => navigation.navigate('CarWaiting'), 7000);
    return (
        <>
            <View style={{marginTop: 'auto'}}>
                <DriverInfo/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Screen.width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.fee}>
                            <Bold style={{fontSize: 17}}>{localization.fee}</Bold>
                            <Bold style={styles.tripFee}>35 500 </Bold>
                            <Regular style={{lineHeight: 25}}>сум</Regular>
                        </View>
                        <SelectedDestination containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                        <Button title={localization.cancelTrip} onPress={() => navigation.navigate("Home")}/>
                    </View>
                </View>
            </View>
        </>
    );
};


export default CarOrder;
