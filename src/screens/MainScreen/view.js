import React from 'react';
import {View} from 'react-native'
import MapScreen from "../MapScreen";
import Search from "../../components/Search/Search";
import Header from "../../components/Header";
import Button from "../../components/Button";
import {localization} from "../../services/Localization";
import GetCurrentLocationButton from "../../components/GetCurrentLocationButton";


const MainScreenView = ({navigation, setMapRef, mapRef}) => {
    return (
        <View style={{flex: 1}}>
            <Header
                subText={localization.whereAreWeGoing}
            />
            <MapScreen
                setMapRef={setMapRef}
                mapRef={mapRef}
            />
            <Search
                navigation={navigation}
            />
            <View style={{marginTop: 'auto', marginHorizontal: 10}}>
                <GetCurrentLocationButton mapRef={mapRef}/>
                <Button
                    title={'Далее'}
                    onPress={() => navigation.navigate('SelectCar')}
                    containerStyle={{marginBottom: 10}}
                />
            </View>
        </View>
    );
};

export default MainScreenView;

