import React from 'react'
import {View, TouchableWithoutFeedback} from "react-native"

import styles from "./styles";
import LocationIcon from "../../assets/images/LocationIcon";
import {Bold, Light} from "../Layout/AppText";
import {localization} from "../../services/Localization";

export const SelectedDestination = ({containerStyle, to, from, selectDestination}) => (
    <View style={[styles.container, containerStyle]}>
        {/*<View style={styles.icons}>*/}
        {/*    <LocationIcon/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.circle}/>*/}
        {/*</View>*/}
        <View style={{marginLeft: 5, flex: 1}}>
            <View style={styles.row}>
                <View style={[styles.addressCircle]}>
                    <View style={styles.innerCircle}/>
                </View>
                {/*<Light style={styles.textColor}>{localization.from}</Light>*/}
                <Bold style={styles.directionText}>{from}</Bold>
            </View>
            <TouchableWithoutFeedback onPress={selectDestination}>
                <View>
                    {/*<Light style={styles.textColor}>{localization.to}</Light>*/}
                    <View style={styles.row}>
                        <View style={[styles.addressCircle, {backgroundColor: 'red'}]}>
                            <View style={styles.innerCircle}/>
                        </View>
                        <Bold style={styles.directionText}>{to}</Bold>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
);


export default SelectedDestination;
