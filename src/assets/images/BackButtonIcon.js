import * as React from "react"
import Svg, {Path} from "react-native-svg"
import {View, StyleSheet} from "react-native"

function BackButtonIcon(props) {
    return (
        <View style={styles.icon} {...props}>
            <Svg width={14.096} height={14.096} viewBox="0 0 14.096 14.096" {...props}>
                <Path fill="#000" d="M14.1 6.167H3.374L8.3 1.242 7.048 0 0 7.048 7.048 14.1l1.242-1.246-4.916-4.925H14.1z"/>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 42,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BackButtonIcon
