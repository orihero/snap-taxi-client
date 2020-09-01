import React from 'react';
import {View} from "react-native";
import styles from "./styles";
import TouchablePlatformSpecific from "../TouchablePlatformSpecific";
import CursorIcon from "../../assets/images/CursorIcon";

const GetCurrentLocationButtonView = ({getCurrentLocation}) => {
    return (
        <View style={styles.getCurrentLocation}>
            <TouchablePlatformSpecific onPress={getCurrentLocation}>
                <View style={styles.circleIcon}>
                    <CursorIcon/>
                </View>
            </TouchablePlatformSpecific>
        </View>
    );
};

export default GetCurrentLocationButtonView;
