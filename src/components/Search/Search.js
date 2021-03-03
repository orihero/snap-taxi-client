import React, {useEffect} from 'react'
import {View, Keyboard} from "react-native"
import {connect} from "react-redux";

import styles from "./styles";
import SearchIcon from "../../assets/images/SearchIcon";
import {Bold, Light} from "../Layout/AppText";
import GooglePlacesAutocomplete from "react-native-google-places-autocomplete";
import ResultIcon from "../../assets/images/ResultIcon";
import {SetDestination} from "../../store/constants/map";
import API_KEY from "../../constants/apiKey";

const Search = ({SetDestination, navigation}) => {

    return (
        <GooglePlacesAutocomplete
            placeholder='Куда едем?'
            minLength={2}
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
            // styles={{
            //     textInputContainer: styles.container,
            //     textInput: styles.input,
            //     listView: styles.searchResult,
            //     row: styles.resultItem
            // }}
            // fetchDetails
            query={{
                key: API_KEY,
                offset: 20,
                // language: 'ru',
                // components: "country:uzb"
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
