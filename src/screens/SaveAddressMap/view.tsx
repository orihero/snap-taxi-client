import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import styles from './styles';
import { GeoCoordinates } from 'react-native-geolocation-service';
import debounce from 'lodash/debounce';
import { isRegionChanged } from '../../helpers';
import { CustomMarker } from '../Map/components/CustomMarker';

interface IProps {
  initialRegion: any;
  isMapReady: boolean;
  setMapRef: (ref: any) => any;
  onRegionChange: (coors: Region) => any;
  setIsMapReady: (isReady: boolean) => void;
  currentLocation: GeoCoordinates | Region | null;
}

const SaveAddressMapScreenView = ({
  setMapRef,
  initialRegion,
  setIsMapReady,
  onRegionChange,
  currentLocation,
}: IProps) => {
  const [isReleased, setIsReleased] = useState(true);
  const [mapHeight, setMapHeight] = useState(1);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent: { layout } }) => setMapHeight(layout.height)}>
      {!!currentLocation && (
        <MapView
          onMapReady={() => setIsMapReady(true)}
          initialRegion={initialRegion}
          onRegionChangeComplete={(region) => {
            if (isRegionChanged(region, currentLocation)) {
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
          style={styles.map}
        />
      )}
      <CustomMarker mapHeight={mapHeight} />
    </View>
  );
};

export default SaveAddressMapScreenView;
