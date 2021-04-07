import React, { useState, useRef, useEffect } from 'react';
import MapScreenView from './view';
import { isPointInPolygon } from 'geolib';
import { Props } from './connect';
import MapView, { Region, MarkerAnimated } from 'react-native-maps';

export const MapController = ({
  mapRef,
  regions,
  setMapRef,
  setRegionId,
  setDistance,
  driversAround,
  setMarkerInfo,
  driverLocation,
  currentBooking,
  destinationInfo,
  currentLocation,
  getLocationData,
  isSelectingOnMap,
  getFullCurrentLocation,
}: Props) => {
  const driverMarkerRef = useRef<MarkerAnimated>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [initialDriverLocation, setInitialDriverLocation] = useState<any>(null);

  useEffect(() => {
    if (driverLocation) {
      if (!initialDriverLocation) {
        setInitialDriverLocation({
          latitude: +driverLocation.lat,
          longitude: +driverLocation.lng,
        });
      }

      driverMarkerRef.current?.animateMarkerToCoordinate(
        {
          latitude: +driverLocation.lat,
          longitude: +driverLocation.lng,
        },
        500,
      );
      mapRef?.animateToRegion({
        latitude: +driverLocation.lat,
        longitude: +driverLocation.lng,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    } else {
      setInitialDriverLocation(null);
    }
  }, [driverLocation]);

  const onRegionChange = (region: Region) => {
    const { latitude, longitude } = region;
    if (isSelectingOnMap) {
      getLocationData({
        payload: {
          latitude,
          longitude,
        },
        successCb: (data) =>
          setMarkerInfo({
            ...data,
            coords: {
              latitude,
              longitude,
            },
          }),
      });
    } else {
      if (!destinationInfo) {
        for (let i = 0; i < regions.length; i++) {
          if (!!regions.reverse()[i].polygon[0]) {
            let result = isPointInPolygon(
              { latitude, longitude },
              regions[i].polygon[0],
            );
            if (result) {
              setRegionId(regions[i].id);
              break;
            }
          }
        }
        getFullCurrentLocation(region);
      }
    }
  };

  return (
    <MapScreenView
      mapRef={mapRef as MapView}
      setDistance={setDistance}
      setMapRef={setMapRef}
      isMapReady={isMapReady}
      setIsMapReady={setIsMapReady}
      driversAround={driversAround}
      onRegionChange={onRegionChange}
      driverMarkerRef={driverMarkerRef}
      initialDriverLocation={initialDriverLocation}
      isDriverAvailable={!!driverLocation}
      isMarkerVisible={
        (!currentBooking && !destinationInfo) || isSelectingOnMap
      }
      currentBooking={currentBooking}
      currentLocation={currentLocation}
      destinationInfo={destinationInfo}
      initialRegion={{
        longitude: currentLocation?.longitude,
        latitude: currentLocation?.latitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      }}
    />
  );
};
