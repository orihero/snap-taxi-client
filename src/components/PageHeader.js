import React from 'react';
import {View, Text, TouchableNativeFeedback,StatusBar, StyleSheet} from "react-native"
import BackButtonIcon from "../assets/images/BackButtonIcon";
import Colors from "../assets/styles/Colors";

const PageHeader = ({title, navigation}) => {
    return (
    <>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.blue} animated={true}/>
        <View style={styles.header}>
            <TouchableNativeFeedback
                onPress={() => navigation.goBack()}
                background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
            >
                <View style={{position: 'absolute', left: 16}}>
                    <BackButtonIcon/>
                </View>
            </TouchableNativeFeedback>

            <Text style={styles.title}>{title}</Text>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: Colors.blue,
        paddingVertical: 34,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',

    }
});

export default PageHeader;