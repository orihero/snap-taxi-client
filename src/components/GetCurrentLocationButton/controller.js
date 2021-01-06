import React from 'react';
import GetCurrentLocationButtonView from './view';
import Geolocation from 'react-native-geolocation-service';
import { debounce } from 'lodash';

const GetCurrentLocationButtonController = ({
  GetCurrentLocation,
  mapRef,
  zoom,
}) => {
  const mapZoom = zoom
    ? zoom
    : {
        latitudeDelta: 0.005,
        longitudeDelta: 0.001,
      };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (data) => {
        GetCurrentLocation(data.coords);
        if (mapRef) {
          mapRef.animateToRegion({
            ...data.coords,
            ...mapZoom,
          });
        }
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return (
    <GetCurrentLocationButtonView
      getCurrentLocation={debounce(getCurrentLocation, 500)}
    />
  );
};
export default GetCurrentLocationButtonController;
