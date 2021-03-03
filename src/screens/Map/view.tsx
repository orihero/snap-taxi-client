import React, { useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, MarkerAnimated, Region } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import { GeoCoordinates } from 'react-native-geolocation-service';
import debounce from 'lodash/debounce';
import { isRegionChanged } from '../../helpers';
import { CustomMarker } from './components/CustomMarker';
import { Drivers } from '@store/models/map/types';
import { Booking } from '@store/models/booking/types';
import Screen from '../../helpers/Dimensions';
import OrderStatus from '@constants/orderStatus';
import apiKey from '@constants/apiKey';
import Colors from '@assets/styles/Colors';
import PulseAnimation from '@components/PulseAnimation/view';

interface IProps {
  mapRef: MapView;
  initialRegion: any;
  isMapReady: boolean;
  isMarkerVisible: boolean;
  driversAround: Drivers[];
  isDriverAvailable: boolean;
  initialDriverLocation: any;
  setMapRef: (ref: any) => any;
  currentBooking: Booking | null;
  driverMarkerRef: (ref: any) => any;
  setDistance: (distance: number) => any;
  onRegionChange: (coors: Region) => any;
  setIsMapReady: (isReady: boolean) => void;
  currentLocation: GeoCoordinates | Region | null;
  destinationInfo: { coords: GeoCoordinates };
}

const MapScreenView = ({
  mapRef,
  setMapRef,
  setDistance,
  initialRegion,
  setIsMapReady,
  driversAround,
  currentBooking,
  onRegionChange,
  destinationInfo,
  driverMarkerRef,
  isMarkerVisible,
  currentLocation,
  isDriverAvailable,
  initialDriverLocation,
}: IProps) => {
  const [isReleased, setIsReleased] = useState(true);
  const [mapHeight, setMapHeight] = useState(1);
  const renderMarkers = () => {
    const status = currentBooking?.status;
    if (status === OrderStatus.NEW || !currentBooking) {
      return driversAround.map((driver, index) => (
        <Marker
          key={index}
          coordinate={{ longitude: +driver.lng, latitude: +driver.lat }}>
          <Image
            style={[
              styles.marker,
              {
                transform: [{ rotate: `${driver.user.car.heading ?? 0} deg` }],
              },
            ]}
            source={require('../../assets/images/car.png')}
          />
        </Marker>
      ));
    } else {
      return null;
    }
  };

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent: { layout } }) => setMapHeight(layout.height)}>
      {!!currentLocation && (
        <MapView
          minZoomLevel={12} // default => 0
          maxZoomLevel={18} // default => 20
          onMapReady={() => setIsMapReady(true)}
          initialRegion={initialRegion}
          onRegionChangeComplete={(region) => {
            if (currentBooking || isRegionChanged(region, currentLocation)) {
              return;
            }
            isReleased && debounce(() => onRegionChange(region), 500)();
          }}
          onTouchStart={() => {
            setIsReleased(false);
          }}
          onTouchEndCapture={() => {
            setIsReleased(true);
          }}
          ref={setMapRef}
          showsUserLocation
          rotateEnabled={false}
          pitchEnabled={false}
          showsMyLocationButton={false}
          provider={'google'}
          style={styles.map}>
          {renderMarkers()}
          {!isMarkerVisible && destinationInfo && (
            <MapViewDirections
              apikey={apiKey}
              mode={'DRIVING'}
              strokeWidth={6}
              strokeColor={Colors.blue}
              origin={currentLocation}
              destination={{
                latitude: destinationInfo.coords.latitude,
                longitude: destinationInfo.coords.longitude,
              }}
              onReady={(direction) => {
                setDistance(direction.distance);
                mapRef.fitToCoordinates([
                  currentLocation,
                  {
                    latitude: destinationInfo.coords.latitude,
                    longitude: destinationInfo.coords.longitude,
                  },
                ]);
              }}
            />
          )}
          {initialDriverLocation && (
            <MarkerAnimated
              ref={driverMarkerRef}
              coordinate={{
                longitude: +initialDriverLocation.longitude,
                latitude: +initialDriverLocation.latitude,
              }}>
              <Image
                style={[
                  styles.marker,
                  {
                    transform: [{ rotate: `${0} deg` }],
                  },
                ]}
                source={require('../../assets/images/car.png')}
              />
            </MarkerAnimated>
          )}
        </MapView>
      )}
      {isMarkerVisible && <CustomMarker mapHeight={mapHeight} />}
      {currentBooking?.status === OrderStatus.NEW && (
        <View style={{ height: mapHeight, width: Screen.width, zIndex: 999 }}>
          <View style={[{ top: mapHeight / 2, left: Screen.width / 2 }]}>
            <PulseAnimation />
          </View>
        </View>
      )}
    </View>
  );
};

export default MapScreenView;
