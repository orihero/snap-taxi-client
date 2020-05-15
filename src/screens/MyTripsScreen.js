import React from 'react';
import {ScrollView, StyleSheet} from "react-native"
import TripItem from "../components/TripItem";


const MyTripsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <TripItem/>
            <TripItem/>
            <TripItem/>
            <TripItem/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
        marginTop: -44
    },
});

export default MyTripsScreen;
