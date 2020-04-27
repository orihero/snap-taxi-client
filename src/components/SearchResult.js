import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View} from "react-native";
import ResultIcon from "../assets/images/ResultIcon";
import {Bold, Light} from "./Layout/AppText";

const SearchResult = ({border=true, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{...styles.searchResultItem, ...(!border && styles.noBorder)}}>
                <ResultIcon style={{marginRight: 10}}/>
                <View>
                    <Bold style={{color: '#1A1C20', fontSize: 15}}>Mega Planet</Bold>
                    <Light style={{color: '#646974', marginRight: 55}}>массив Юнусабад, Юнусабадский район, Ташкент,
                        Узбекистан</Light>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    searchResultItem: {
        flexDirection: 'row',
        marginHorizontal: 12.5,
        alignItems: 'center',
        paddingBottom: 6.5,
        marginBottom: 11.5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(170,174,183, 0.37)',
    },
    noBorder: {
        borderBottomWidth: 0,
        paddingBottom: 0,
    }
});

export default SearchResult;