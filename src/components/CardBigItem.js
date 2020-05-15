import React from 'react';
import {View, Text, StyleSheet} from "react-native"
import UzcardIcon from "../assets/images/UzcardIcon";
import ChipIcon from "../assets/images/ChipIcon";
import Colors from "../assets/styles/Colors";
import {Bold} from "./Layout/AppText";
import {localization} from "../services/Localization";

const CardBigItem = () => {
    return (
        <View style={styles.container}>
            <UzcardIcon width={19.62} height={26} style={{marginBottom: 15}}/>
            <View style={{flexDirection: 'row', marginBottom: 13, justifyContent: 'space-between', marginRight: 30}}>
                <Bold style={{fontSize: 18}}>5575</Bold>
                <Bold style={{fontSize: 18}}>7577</Bold>
                <Bold style={{fontSize: 18}}>6512</Bold>
                <Bold style={{fontSize: 18}}>6578</Bold>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between', marginRight: 45}}>
                <View>
                    <Text style={{fontSize: 13, color: '#646974'}}>{localization.cardDate}</Text>
                    <Text style={{fontSize: 15, color: '#646974', fontWeight: 'bold'}}>08/24</Text>
                </View>
                <View>
                    <Text style={{fontSize: 13, color: '#646974'}}>{localization.phone}</Text>
                    <Text style={{fontSize: 15, color: '#646974', fontWeight: 'bold'}}>+998 90 755 4554</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#646974'}}>Прокопенко Вячеслав</Text>
                <ChipIcon style={{marginRight: 28.4}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        paddingBottom: 20,
        paddingLeft: 29,
        backgroundColor: Colors.background,
        borderRadius: 10,
        elevation: 10,
        marginBottom: 20.5
    }
});

export default CardBigItem;
