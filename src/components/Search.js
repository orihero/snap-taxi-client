import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Dimensions, ScrollView} from "react-native"
import SearchIcon from "../assets/images/SearchIcon";
import SearchResult from "./SearchResult";
import LocationIcon from "../assets/images/LocationIcon";

const Search = () => {
    const [value, setValue] = useState();
    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={text => setValue(text)}
                    style={styles.input}
                    placeholder={'Куда едем?'}
                />
                {
                    value
                        ? <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                            <Text>Карта</Text>
                            <LocationIcon style={{marginLeft: 10.46}}/>
                        </View>
                        : <SearchIcon style={{marginLeft: 'auto'}}/>
                }
                <View style={styles.searchBottomFragment}/>
            </View>
            {
                value ?
                    <View style={styles.searchResult}>
                        <ScrollView style={{maxHeight: 500}}>
                            <SearchResult border={true}/>
                            <SearchResult border={true}/>
                            <SearchResult border={true}/>
                            <SearchResult/>
                        </ScrollView>
                    </View> : <></>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        height: 59,
        paddingHorizontal: 18,
        borderRadius: 250,
        justifyContent: 'center'
    },
    input: {
        width: '79%',
        color: '#454F63',
        fontSize: 16,
        height: '100%'
    },
    searchBottomFragment: {
        width: Dimensions.get('window').width - 48,
        backgroundColor: '#fff',
        borderRadius: 250,
        height: 20,
        position: 'absolute',
        bottom: 0,
    },
    searchResult: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - 64,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingTop: 23,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
});


export default Search;