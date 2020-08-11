import React, {useEffect} from 'react'
import {View, Keyboard} from "react-native"
import {connect} from "react-redux";

import styles from "./styles";
import {localization} from "../../services/Localization"
import SearchIcon from "../../assets/images/SearchIcon";
import LocationIcon from "../../assets/images/LocationIcon";
import {Bold, Light, Regular} from "../Layout/AppText";
import GooglePlacesAutocomplete from "react-native-google-places-autocomplete";
import ResultIcon from "../../assets/images/ResultIcon";
import {SetDestination} from "../../store/constants/map";

const Search = ({setSearchActive, isSearchActive, SetDestination, navigation}) => {

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

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                SetDestination({
                    data,
                    coords: {
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng
                    }
                });
                navigation.navigate('SelectCar')
            }}
            suppressDefaultStyles
            styles={{
                textInputContainer: styles.container,
                textInput: styles.input,
                listView: styles.searchResult,
                row: styles.resultItem
            }}
            enableHighAccuracyLocation
            enablePoweredByContainer={false}
            isRowScrollable={false}
            fetchDetails
            renderRightButton={() => {
                return (
                    // isSearchActive ?
                    //     <View style={{flexDirection: 'row', marginLeft: 'auto', alignItems: 'center'}}>
                    //         <Regular>{localization.map}</Regular>
                    //         <LocationIcon style={{marginLeft: 10.46}}/>
                    //     </View>
                    <SearchIcon style={{marginLeft: 'auto'}}/>
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
                components: "country:uzb"
            }}
        />
    );
};
const mapStateToProps = ({map}) => ({
    map
});

const mapDispatchToProps = dispatch => ({
    SetDestination: (payload) => dispatch({
        type: SetDestination.SUCCESS,
        payload
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
