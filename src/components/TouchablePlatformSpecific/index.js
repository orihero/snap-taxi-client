import React from "react";
import {
    TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableHighlight,
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
            <TouchableOpacity onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
};

export default TouchablePlatformSpecific
