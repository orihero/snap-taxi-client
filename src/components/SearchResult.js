import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import ResultIcon from "../assets/images/ResultIcon";

const SearchResult = ({border}) => {
    return (
        <View style={{...styles.searchResultItem, ...(border && styles.border)}}>
            <ResultIcon style={{marginRight: 10}}/>
            <View>
                <Text style={{color: '#1A1C20', fontSize: 15, fontWeight: 'bold'}}>Mega Planet</Text>
                <Text style={{color: '#646974', marginRight: 55}}>массив Юнусабад, Юнусабадский район, Ташкент,
                    Узбекистан</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchResultItem: {
        flexDirection: 'row',
        marginHorizontal: 12.5,
        alignItems: 'center',
        paddingBottom: 6.5,
        marginBottom: 11.5
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(170,174,183, 0.37)',

    }
});

export default SearchResult;