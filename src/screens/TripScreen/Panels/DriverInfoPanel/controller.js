import React, { useState, useRef } from 'react';
import { PanResponder, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DriverInfoPanelView from './view';
import Geolocation from 'react-native-geolocation-service';

const DriverInfoPanelController = ({ order, CancelOrder, SendPush }) => {
  const navigation = useNavigation();

  const height = useRef(new Animated.Value(0)).current;
  const [isPressed, setIsPressed] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const panResPonder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return !(
          gestureState.dy === 0 ||
          (gestureState.dy < 1 && gestureState.dy > -2)
        );
      },
      onPanResponderGrant: (evt, gestureState) => {
        height.setOffset(height._value);
      },
      onPanResponderMove: (evt, gestureState) => {
        height.setValue(gestureState.dy * -1);
      },
      onPanResponderRelease: (evt, gestureState) => {
        height.flattenOffset();
        if (gestureState.dy > 0) {
          Animated.spring(height, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dy < 0) {
          Animated.spring(height, {
            toValue: 250,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const collapse = height.interpolate({
    inputRange: [-1, 250],
    outputRange: [0, 250],
    extrapolate: 'clamp',
  });

  const backgroundColor = collapse.interpolate({
    inputRange: [0, 250],
    outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)'],
  });

  const cancelOrder = () => {
    CancelOrder(
      {
        orderId: order.id,
        driver_id: 28,
      },
      () => {
        navigation.reset({
          routes: [{ name: 'MainStack' }],
          index: 0,
        });
      },
    );
  };

  const coming = () => {
    SendPush(
      {
        user_id: order.driver_id,
        title: 'Выхожу',
        message: 'Клиент выходить',
        type: 'drivers',
      },
      () => {
        setIsPressed(true);
      },
    );
  };

  const showMyLocation = () => {
    Geolocation.getCurrentPosition((position) => {
      SendPush(
        {
          user_id: order.driver_id,
          title: 'Я здесь',
          message: JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
          type: 'drivers',
        },
        () => {
          setIsShow(true);
        },
      );
    });
  };

  return (
    <DriverInfoPanelView
      showMyLocation={showMyLocation}
      isShow={isShow}
      isPressed={isPressed}
      backgroundColor={backgroundColor}
      panResPonder={panResPonder}
      airCondition={!!order.option_ids ? !!order.option_ids.length : false}
      car={order.car}
      coming={coming}
      phone={order.phone}
      collapse={collapse}
      price={order.price}
      status={order.status}
      driver={order.driver}
      cancelOrder={cancelOrder}
      routes={order.routes}
    />
  );
};

export default DriverInfoPanelController;
