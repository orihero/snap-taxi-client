import React, {useState, useEffect} from 'react'
import {View, TextInput, ScrollView, Keyboard} from "react-native"

import styles from "./styles";
import {localization} from "../../services/Localization"
import SearchIcon from "../../assets/images/SearchIcon";
import SearchResult from "../SearchResult/SearchResult";
import LocationIcon from "../../assets/images/LocationIcon";
import {Regular} from "../Layout/AppText";

const Search = ({navigation, setSearchActive, isSearchActive}) => {

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        };
    }, []);

    const _keyboardDidShow = () => {
        setSearchActive(true)
    };

    const [value, setValue] = useState('');
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.container}>
                    <TextInput
                        onChangeText={text => {
                            setValue(text.trim());
                        }}
                        style={styles.input}
                        placeholder={localization.where}
                    />
                    {
                        isSearchActive ?
                            <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
                                <Regular>{localization.map}</Regular>
                                <LocationIcon style={{marginLeft: 10.46}}/>
                            </View>
                            : <SearchIcon style={{marginLeft: 'auto'}}/>
                    }
                </View>
            </View>
            <View>
                {
                    isSearchActive &&
                    <View style={styles.searchResult}>
                        <ScrollView style={{maxHeight: 250}}>
                            <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                            <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                            <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                            <SearchResult onPress={() => navigation.navigate('SelectCar')} border={false}/>
                        </ScrollView>
                    </View>
                }
            </View>
        </View>
    );
};

export default Search;
