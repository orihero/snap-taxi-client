import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Bold} from "../components/Layout/AppText";

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <Bold>Здесь будет страница уведомлений</Bold>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NotificationsScreen;
