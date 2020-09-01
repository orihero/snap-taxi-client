import React from 'react';
import GetCurrentLocationButtonView from "./view";
import Geolocation from "@react-native-community/geolocation";

const GetCurrentLocationButtonController = ({GetCurrentLocation, mapRef}) => {

        const getCurrentLocation = () => {
            Geolocation.getCurrentPosition((data) => {
                GetCurrentLocation(data.coords);
                mapRef.animateToRegion({
                    ...data.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.001,
                });
            }, error => {
                getCurrentLocation()
            });

        };

        return (
            <GetCurrentLocationButtonView
                getCurrentLocation={getCurrentLocation}
            />
        );
    }
;

export default GetCurrentLocationButtonController;
