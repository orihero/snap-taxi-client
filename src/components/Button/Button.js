import React from 'react';
import {View, ActivityIndicator} from "react-native";

import styles from "./styles";
import {SemiBold} from "../Layout/AppText";
import TouchablePlatformSpecific from "../TouchablePlatformSpecific";

const Button = ({title, containerStyle, onPress, texStyle, isLoading}) => {
    return (
        <View style={[styles.button, containerStyle]}>
            <TouchablePlatformSpecific onPress={onPress} disabled={isLoading}>
                <View style={styles.wrapper}>
                    {
                        !isLoading
                            ? <SemiBold style={[{color: '#2A1E06'}, texStyle]}>{title}</SemiBold>
                            : <ActivityIndicator color={'#fff'} size={"large"}/>
                    }
                </View>
            </TouchablePlatformSpecific>
        </View>
    );
};

export default Button;
