import React from 'react';
import GetCurrentLocationButtonView from './view';
import { Props } from './connect';
import Geolocation from 'react-native-geolocation-service';

const GetCurrentLocationButtonController = ({ mapRef }: Props) => {
  const locationHandler = () => {
    Geolocation.getCurrentPosition(
      (data) => {
        const coords = data.coords;
        const { latitude, longitude } = coords;
        if (mapRef) {
          mapRef.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          });
        }
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceRequestLocation: true,
      },
    );
  };
  return <GetCurrentLocationButtonView getCurrentLocation={locationHandler} />;
};
export default GetCurrentLocationButtonController;
