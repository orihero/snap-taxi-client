import React from 'react';
import { TouchableOpacity } from 'react-native';

const TouchablePlatformSpecific = ({ onPress, children, ...restProps }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} {...restProps}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchablePlatformSpecific;
