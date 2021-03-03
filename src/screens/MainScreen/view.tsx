import React from 'react';
import { View } from 'react-native';
import { Map } from '../Map';
import { useIsFocused } from '@react-navigation/native';
import Header from '@components/Header';
import Button from '@components/Button';
import GetCurrentLocationButton from '@components/GetCurrentLocationButton';
import { localization } from '../../services/Localization';
import MapView from 'react-native-maps';

interface IProps {
  mapRef: MapView;
  setMapRef: (mapRef: MapView) => void;
  addressText: string;
  goToSelectCar: () => void;
}

const MainScreenView = ({
  mapRef,
  setMapRef,
  addressText,
  goToSelectCar,
}: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header subText={addressText} />
      {useIsFocused() && <Map setMapRef={setMapRef} mapRef={mapRef} />}
      <View style={{ marginTop: 'auto', marginHorizontal: 10 }}>
        <GetCurrentLocationButton mapRef={mapRef} />
        <Button
          title={localization.next}
          onPress={goToSelectCar}
          containerStyle={{ marginBottom: 10 }}
        />
      </View>
    </View>
  );
};

export default MainScreenView;
