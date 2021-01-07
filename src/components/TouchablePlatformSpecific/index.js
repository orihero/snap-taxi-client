import React from "react";
import {
    TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
    Platform
} from "react-native";

const TouchablePlatformSpecific = ({onPress, children, ...restProps}) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                {...restProps}
                onPress={onPress}
            >
                {children}
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                {children}
            </TouchableWithoutFeedback>
        )
    }
};

export default TouchablePlatformSpecific
