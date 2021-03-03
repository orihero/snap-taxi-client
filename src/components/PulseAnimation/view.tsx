import React from 'react';
import {StyleSheet, View} from "react-native";

import Pulse from 'react-native-pulse';
import Colors from "../../assets/styles/Colors";


const PulseAnimation = () => {
    return (
        <View style={styles.container}>
            <View>
                <Pulse
                    color={Colors.blue}
                    numPulses={2}
                    diameter={300}
                    speed={20}
                    duration={2000}
                />
                <View style={styles.cc}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    cc: {
        position: 'absolute',
        top: -15,
        left: -15,
        width: 30,
        height: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: Colors.blue
    }
});

export default PulseAnimation;
