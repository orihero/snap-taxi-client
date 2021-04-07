import React, { useState } from 'react';
import { Props } from './connect';
import { View } from 'react-native';
import { Region } from 'react-native-maps';
import SaveAddressMapScreenView from './view';
import { SelectLocationPanel } from './components/SelectLocationPanel';

export const SaveAddressMapScreenController = ({
  route,
  setMapRef,
  currentLocation,
  getLocationData,
}: Props) => {
  const [isMapReady, setIsMapReady] = useState(false);
  const [addressInfo, setAddressInfo] = useState({});
  const onRegionChange = (region: Region) => {
    const { latitude, longitude } = region;
    getLocationData({
      payload: {
        latitude,
        longitude,
      },
      successCb: (data) =>
        setAddressInfo({
          ...data,
          address: data.name,
          coords: {
            latitude,
            longitude,
          },
        }),
    });
  };
  return (
    <>
      <SaveAddressMapScreenView
        setMapRef={setMapRef}
        isMapReady={isMapReady}
        setIsMapReady={setIsMapReady}
        onRegionChange={onRegionChange}
        currentLocation={currentLocation}
        initialRegion={{
          longitude: route?.params?.longitude ?? currentLocation?.longitude,
          latitude: route?.params?.latitude ?? currentLocation?.latitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      />
      <View style={{ marginTop: 'auto' }}>
        <SelectLocationPanel
          setAddress={route.params?.setAddress}
          addressInfo={addressInfo}
        />
      </View>
    </>
  );
};
