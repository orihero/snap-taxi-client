import React from 'react'
import {View, TouchableWithoutFeedback} from "react-native"

import styles from "./styles";
import LocationIcon from "../../assets/images/LocationIcon";
import {Bold, Light} from "../Layout/AppText";
import {localization} from "../../services/Localization";

export const SelectedDestination = ({containerStyle, to, from, disabled, selectDestination}) => (
    <View style={[styles.container, containerStyle]}>
        {/*<View style={styles.icons}>*/}
        {/*    <LocationIcon/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.smallCircle}/>*/}
        {/*    <View style={styles.circle}/>*/}
        {/*</View>*/}
        <TouchableWithoutFeedback onPress={selectDestination} disabled={disabled}>
            <View style={{marginLeft: 5, flex: 1}}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.addressCircle]}>
                            <View style={styles.innerCircle}/>
                        </View>
                        {/*<Light style={styles.textColor}>{localization.from}</Light>*/}
                        <Bold style={styles.directionText}>{from}</Bold>
                    </View>
                </View>
                <View>
                    {/*<Light style={styles.textColor}>{localization.to}</Light>*/}
                    <View style={styles.row}>
                        <View style={[styles.addressCircle, {backgroundColor: 'red'}]}>
                            <View style={styles.innerCircle}/>
                        </View>
                        <Bold style={styles.directionText}>{to}</Bold>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
);


export default SelectedDestination;
