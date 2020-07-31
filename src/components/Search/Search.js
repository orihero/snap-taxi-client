import React, {useState, useEffect} from 'react'
import {View, Keyboard} from "react-native"

import styles from "./styles";
import {localization} from "../../services/Localization"
import SearchIcon from "../../assets/images/SearchIcon";
import LocationIcon from "../../assets/images/LocationIcon";
import {Bold, Light, Regular} from "../Layout/AppText";
import GooglePlacesAutocomplete from "react-native-google-places-autocomplete";
import ResultIcon from "../../assets/images/ResultIcon";

const Search = ({navigation, setSearchActive, isSearchActive}) => {

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setSearchActive(true)
    };

    const _keyboardDidHide = () => {
        setSearchActive(false)
    };

    const [value, setValue] = useState('');
    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                console.log(data, details)
            }}
            suppressDefaultStyles
            styles={{
                textInputContainer: styles.container,
                textInput: styles.input,
                listView: styles.searchResult,
                row: styles.resultItem
            }}
            debounce={10000}
            enableHighAccuracyLocation
            enablePoweredByContainer={false}
            isRowScrollable={false}
            renderRightButton={() => {
                return (
                    isSearchActive ?
                        <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
                            <Regular>{localization.map}</Regular>
                            <LocationIcon style={{marginLeft: 10.46}}/>
                        </View>
                        : <SearchIcon style={{marginLeft: 'auto'}}/>
                )
            }}
            renderRow={(data) => {
                return (
                    <>
                        <ResultIcon style={{marginRight: 10}}/>
                        <View>
                            <Bold style={styles.main}>{data.structured_formatting.main_text}</Bold>
                            <Light style={styles.secondary}>{data.structured_formatting.secondary_text}</Light>
                        </View>
                    </>
                )
            }}
            query={{
                key: 'AIzaSyAg85fttaNZA_wmaZgvpFfzrUs8ohWrVBc',
                language: 'ru',
            }}
        />
    );
};

export default Search;
