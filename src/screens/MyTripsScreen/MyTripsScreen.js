import React from 'react';
import {ScrollView} from "react-native"
import styles from "./styles";
import TripItem from "../../components/TripItem/TripItem";


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

export default MyTripsScreen;
