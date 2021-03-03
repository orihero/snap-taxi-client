import React from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';
import { Regular } from '@components/Layout/AppText';

interface IProps {
  mapHeight: number;
  opacity: any;
  circle: boolean;
  minutes: number;
}

export const CustomMarkerView = ({
  mapHeight,
  circle,
  opacity,
  minutes,
}: IProps) => {
  return (
    <View style={[styles.overlay, { top: mapHeight / 2 - 90 }]}>
      <View style={styles.circle}>
        {circle ? (
          <Animated.View style={[styles.cc, { opacity }]} />
        ) : (
          <>
            <Regular style={{ color: '#fff', fontSize: 20, marginBottom: -10 }}>
              {minutes}
            </Regular>
            <Regular style={{ color: '#fff', fontSize: 15 }}>min</Regular>
          </>
        )}
      </View>
      <View style={styles.stick} />
    </View>
  );
};
