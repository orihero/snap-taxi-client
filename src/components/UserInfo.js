import React from 'react';
import {View, StyleSheet, Dimensions} from "react-native"
import ProfileImageIcon from "../assets/images/ProfileImageIcon";
import {Bold, Regular} from "./Layout/AppText";

const UserInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <ProfileImageIcon/>
            </View>
            <Regular style={{fontSize: 15}}>Алексей</Regular>
            <Bold style={{fontSize: 18}} numberOfLines={1}>+998 90 377 33 85</Bold>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 41,
        marginLeft: 20,
        alignItems: 'flex-start'
    },
    imgWrapper: {
        borderRadius: 100,
        borderWidth: 4,
        width: 85,
        height: 85,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#F2F3F6',
        backgroundColor: '#fff',
        elevation: 10,
        marginBottom: 16
    }
})

export default UserInfo;