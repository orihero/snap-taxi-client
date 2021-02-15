import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import TouchablePlatformSpecific from '../TouchablePlatformSpecific';
import CursorIcon from '../../assets/images/CursorIcon';

const GetCurrentLocationButtonView = ({ getCurrentLocation }) => {
  return (
    <TouchablePlatformSpecific
      style={styles.getCurrentLocation}
      onPress={getCurrentLocation}>
      <View style={styles.circleIcon}>
        <CursorIcon />
      </View>
    </TouchablePlatformSpecific>
  );
};

export default GetCurrentLocationButtonView;
