import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Dimensions, ScrollView} from "react-native"
import {localization} from "../services/Localization"
import SearchIcon from "../assets/images/SearchIcon";
import SearchResult from "./SearchResult";
import LocationIcon from "../assets/images/LocationIcon";
import {Regular} from "./Layout/AppText";
import Colors from "../assets/styles/Colors";

const Search = ({navigation, setSearchActive}) => {
    const [value, setValue] = useState('');
    return (
        <View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.container}>
                    <TextInput
                        onChangeText={text => {
                            setValue(text.trim());
                            setSearchActive(text.trim().length > 0)
                        }}
                        style={styles.input}
                        placeholder={localization.where}
                    />
                    {
                        value ?
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
                    value ?
                        <View style={styles.searchResult}>
                            <ScrollView style={{maxHeight: 250}}>
                                <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                                <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                                <SearchResult onPress={() => navigation.navigate('SelectCar')}/>
                                <SearchResult onPress={() => navigation.navigate('SelectCar')} border={false}/>
                            </ScrollView>
                        </View> : <></>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        height: 59,
        paddingHorizontal: 18,
        borderRadius: 250,
        justifyContent: 'center',
        elevation: 20,
        zIndex: 999
    },
    input: {
        width: '79%',
        color: '#454F63',
        fontSize: 16,
        height: '100%',
        fontFamily: 'SFUIDisplay-Light',
    },
    searchResult: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - 64,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        paddingBottom: 27.7,
        paddingTop: 30,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        zIndex: 2
    },
});


export default Search;
