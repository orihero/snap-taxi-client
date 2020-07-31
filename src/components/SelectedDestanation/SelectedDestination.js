import React from 'react'
import {View} from "react-native"

import styles from "./styles";
import AddIcon from "../../assets/images/AddIcon";
import LocationIcon from "../../assets/images/LocationIcon";
import {Bold, Light} from "../Layout/AppText";
import {localization} from "../../services/Localization";

export const SelectedDestination = ({containerStyle, noIcon}) => (
    <View style={[styles.container, containerStyle]}>
        <View style={styles.icons}>
            <LocationIcon/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.smallCircle}/>
            <View style={styles.circle}/>
        </View>
        <View style={{marginLeft: 13, flex: 1}}>
            <View>
                <Light style={styles.textColor}>{localization.from}</Light>
                <Bold style={styles.directionText}>Саларская набережаная 35</Bold>
            </View>
            <View>
                <Light style={styles.textColor}>{localization.to}</Light>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Bold style={styles.directionText}>Дом</Bold>
                    {!noIcon && <AddIcon style={{marginLeft: 'auto'}}/>}
                </View>
            </View>
        </View>
    </View>
);




export default SelectedDestination;