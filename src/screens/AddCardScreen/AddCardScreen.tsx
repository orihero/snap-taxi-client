import React, {useState} from 'react';
import {View} from "react-native"

import styles from "./styles";
import CardBigItem from "@components/CardBigItem";
import AddCard from "@components/AddCard/AddCard";
import AddCardModal from "@components/AddCardModal";


const AddCardScreen = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <CardBigItem/>
            {!isOpen && <AddCard onPress={() => setIsOpen(!isOpen)}/>}
            <AddCardModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </View>
    );
};

export default AddCardScreen;
