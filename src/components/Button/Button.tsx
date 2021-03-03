import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
import { SemiBold } from '../Layout/AppText';
import TouchablePlatformSpecific from '../TouchablePlatformSpecific';

interface IProps {
  title: string;
  containerStyle?: any;
  onPress: () => void;
  texStyle?: any;
  isLoading?: boolean;
}

const Button = ({
  title,
  containerStyle,
  onPress,
  texStyle,
  isLoading,
}: IProps) => {
  return (
    <TouchablePlatformSpecific
      style={[styles.button, containerStyle]}
      onPress={onPress}
      disabled={isLoading}>
      {!isLoading ? (
        <SemiBold style={[{ color: '#2A1E06' }, texStyle]}>{title}</SemiBold>
      ) : (
        <ActivityIndicator color={'#fff'} size={'large'} />
      )}
    </TouchablePlatformSpecific>
  );
};

export default Button;
