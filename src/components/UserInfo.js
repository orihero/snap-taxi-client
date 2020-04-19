import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import ProfileImageIcon from "../assets/images/ProfileImageIcon";

const UserInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <ProfileImageIcon/>
            </View>
            <Text style={{color: '#232323', fontSize: 15}}>Алексей</Text>
            <Text style={{color: '#232323', fontSize: 18, fontWeight: 'bold'}}>+998 90 377 33 85</Text>
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