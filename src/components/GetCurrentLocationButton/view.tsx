import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import TouchablePlatformSpecific from '../TouchablePlatformSpecific';
import CursorIcon from '../../assets/images/CursorIcon';

const GetCurrentLocationButtonView = ({
  getCurrentLocation,
  disabled,
}: any) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.getCurrentLocation}
      onPress={getCurrentLocation}>
      <View style={styles.circleIcon}>
        <CursorIcon />
      </View>
    </TouchableOpacity>
  );
};

export default GetCurrentLocationButtonView;
