import React from 'react';
import {View} from 'react-native'
import MapScreen from "../MapScreen";
import Header from "../../components/Header";
import Button from "../../components/Button";
import GetCurrentLocationButton from "../../components/GetCurrentLocationButton";
import {localization} from "../../services/Localization";


const MainScreenView = ({navigation, setMapRef, mapRef, currentLocationText, drivers}) => {
    return (
        <View style={{flex: 1}}>
            <Header
                subText={currentLocationText}
            />
            <MapScreen
                setMapRef={setMapRef}
                mapRef={mapRef}
                circle
                drivers={drivers}
            />
            <View style={{marginTop: 'auto', marginHorizontal: 10}}>
                <GetCurrentLocationButton mapRef={mapRef}/>
                <Button
                    title={localization.next}
                    onPress={() => navigation.navigate('SelectCar')}
                    containerStyle={{marginBottom: 10}}
                />
            </View>
        </View>
    );
};

export default MainScreenView;

