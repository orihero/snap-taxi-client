import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Bold} from "../components/Layout/AppText";

const SupportScreen = () => {
    return (
        <View style={styles.container}>
            <Bold>Здесь будет страница службы поддержки</Bold>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SupportScreen;
