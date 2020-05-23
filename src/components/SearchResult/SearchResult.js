import React from 'react';
import {TouchableWithoutFeedback, View} from "react-native";

import styles from "./styles";
import ResultIcon from "../../assets/images/ResultIcon";
import {Bold, Light} from "../Layout/AppText";

const SearchResult = ({border = true, onPress}) => {
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


export default SearchResult;
