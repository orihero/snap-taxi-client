import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Map } from '../Map';
import { useIsFocused } from '@react-navigation/native';
import Header from '@components/Header';
import Button from '@components/Button';
import GetCurrentLocationButton from '@components/GetCurrentLocationButton';
import { localization } from '../../services/Localization';
import MapView from 'react-native-maps';
import styles from './styles';
import LocationIcon from '../../assets/images/LocationIcon';
import { Address } from '@store/models/user/types';
import { DestinationInfo } from '@store/models/map/types';
import { Booking } from '@store/models/booking/types';

interface IProps {
  mapRef: MapView;
  setMapRef: (mapRef: MapView) => void;
  selectDest: (info: DestinationInfo) => void;
  addressText: string;
  latestBookings: Booking[];
  goToSelectCar: () => void;
  savedAddresses: Address[];
}

const AddressItem = ({ title, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={styles.addressItem}>
    <LocationIcon />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const MainScreenView = ({
  mapRef,
  savedAddresses,
  setMapRef,
  addressText,
  goToSelectCar,
  latestBookings,
  selectDest,
}: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Header subText={addressText} />
      {useIsFocused() && <Map setMapRef={setMapRef} mapRef={mapRef} />}
      <View style={{ marginTop: 'auto' }}>
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
          <GetCurrentLocationButton mapRef={mapRef} />
          <Button
            title={localization.next}
            onPress={goToSelectCar}
            containerStyle={{ marginBottom: 10 }}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 30, paddingBottom: 20 }}>
          {savedAddresses.map((item) => (
            <AddressItem
              onPress={() => {
                selectDest({
                  coords: {
                    latitude: +item.lat,
                    longitude: +item.lng,
                  },
                  name: item.title,
                  Point: {
                    pos: '',
                  },
                });
              }}
              title={item.title}
            />
          ))}
          {latestBookings.map((item) => {
            if (!item.routes[1]) {
              return null;
            }
            const r = item.routes[1];
            return (
              <AddressItem
                onPress={() => {
                  selectDest({
                    coords: {
                      latitude: +r.lat,
                      longitude: +r.lng,
                    },
                    name: r.address,
                    Point: {
                      pos: '',
                    },
                  });
                }}
                title={r.address}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreenView;
