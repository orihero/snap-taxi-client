import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native'
import styles from "./styles";

import DriverInfo from "../DriverInfo/DriverInfo";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";
import {Bold, Light} from "../Layout/AppText";
import Colors from "../../assets/styles/Colors";
import StarIcon from "../../assets/images/StarIcon";
import Button from "../Button";
import Screen from "../../helpers/Dimensions";

const TripItem = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
            <View style={styles.tripItem}>
                <DriverInfo finished activeExclaim/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Screen.width - 32}/>
                    <View style={styles.content}>
                        <SelectedDestination containerStyle={{paddingBottom: 17, paddingTop: 11}} noIcon/>
                        <View style={styles.textWrapper}>
                            <Light style={styles.text}>Id 4562455865</Light>
                            <Light style={styles.text}>12.03.2020</Light>
                        </View>
                        <View style={{height: isCollapsed ? 'auto' : 0}}>
                            <View style={styles.textWrapper}>
                                <Bold style={{fontSize: 16}}>Ваша оценка</Bold>
                                <Bold style={{fontSize: 16}}>4 <StarIcon active width={17.19} height={16.48}/></Bold>
                            </View>
                            <View style={styles.textWrapper}>
                                <Bold style={{fontSize: 16}}>Цена:</Bold>
                                <Bold style={{fontSize: 16, color: Colors.blue}}>12 500 сум</Bold>
                            </View>
                            <Button title={'Пожаловаться'} containerStyle={{marginBottom: 20.4, marginTop: 10}}/>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default TripItem;