import * as React from "react"
import {View,Image, StyleSheet} from "react-native"

function BackButtonIcon(props) {
    return (
        <View style={styles.icon} {...props}>
            <Image source={require('./BackButtonIcon.png')}/>
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
