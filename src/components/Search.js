import React from 'react'
import {View, Text, TextInput, StyleSheet, Dimensions} from "react-native"
import SearchIcon from "../assets/images/SearchIcon";
import ResultIcon from "../assets/images/ResultIcon";

const Search = () => {
    return (
        <View>
            <View style={styles.container}>
                <TextInput style={{width: '90%', color: '#454F63', fontSize: 16}} placeholder={'Куда едем?'}/>
                <SearchIcon style={{marginLeft: 'auto'}}/>
                <View style={styles.searchBottomFragment}/>
            </View>
            <View style={styles.searchResult}>
                <View style={styles.searchResultItem}>
                    <ResultIcon style={{marginRight: 10}}/>
                    <View>
                        <Text style={{color: '#1A1C20', fontSize: 15, fontFamily: 'bold'}}>Mega Planet</Text>
                        <Text>массив Юнусабад, Юнусабадский район, Ташкент, Узбекистан</Text>
                    </View>
                </View>
            </View>
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
    searchBottomFragment: {
        width: Dimensions.get('window').width - 48,
        backgroundColor: '#fff',
        borderRadius: 250,
        height: 20,
        position: 'absolute',
        bottom: 0,
    },
    searchResult: {
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
    searchResultItem: {
        width: Dimensions.get('window').width - 64,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    }
});


export default Search;