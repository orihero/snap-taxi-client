import React, { useEffect, useRef, useState } from 'react';
import { CustomMarkerView } from './view';
import { Animated } from 'react-native';
import { Props } from './connect';

export const CustomMarkerController = ({
  mapHeight,
  isLoading,
  currentLocation,
}: Props) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const [minutes, setMinutes] = useState<number>(2);

  useEffect(() => {
    setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
    blink();
  }, []);

  useEffect(() => {
    if (isLoading) {
      setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
      blink();
    }
  }, [currentLocation]);

  const blink = () => {
    opacity.setValue(1);
    if (isLoading) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => blink());
    }
  };
  return (
    <CustomMarkerView
      mapHeight={mapHeight}
      opacity={opacity}
      circle={isLoading}
      minutes={minutes}
    />
  );
};
