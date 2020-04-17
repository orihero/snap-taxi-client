import React from 'react';
import {View, Text, Dimensions, StyleSheet} from "react-native"
import Button from "./Button";
import AddIcon from "./AddIcon";

const SelectPlanMenu = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{...styles.column}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                        <Text style={{fontWeight: 'bold', fontSize: 13}}>Дополнительно</Text>
                        <AddIcon color={'#575f6b'}/>
                    </View>
                    <Button title={'Найти такси'}/>
                </View>
                <View style={styles.column}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24}}>
                        <Text style={{fontWeight: 'bold', fontSize: 13}}>Дополнительно</Text>
                        <AddIcon color={'#575f6b'}/>
                    </View>
                    <Button title={'Для друга'} style={{backgroundColor: '#f2f2f2'}}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: 'auto',
        marginBottom: 12,
        borderRadius: 15,
        paddingBottom: 23,
        paddingHorizontal: 13,
        paddingTop: 28
    },
    column: {
        width: '48.5%'
    }
});

export default SelectPlanMenu;