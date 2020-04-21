import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import CardBigItem from "../components/CardBigItem";
import AddCard from "../components/AddCard";


const AddCardScreen = () => {
    return (
        <View style={styles.container}>
            <CardBigItem/>
            <AddCard/>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       paddingHorizontal: 16,
       top: -35,
       zIndex: 2
   }
});

export default AddCardScreen;