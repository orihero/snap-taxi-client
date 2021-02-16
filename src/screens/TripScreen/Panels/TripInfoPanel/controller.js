import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import TripInfoPanelView from './view';
import { Alert, Animated, PanResponder } from 'react-native';

const TripInfoPanelController = ({ order, CancelOrder }) => {
  const navigation = useNavigation();

  const height = useRef(new Animated.Value(280)).current;

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
            toValue: 280,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const collapse = height.interpolate({
    inputRange: [-1, 280],
    outputRange: [20, 290],
    extrapolate: 'clamp',
  });

  const cancelOrder = () => {
    return Alert.alert(
      'Отмена заказа',
      'Вы действительно хотите отменить заказ ?',
      [
        {
          text: 'Да',
          onPress: () => {
            CancelOrder(
              {
                orderId: order.id,
                driver_id: order.driver.user_id,
              },
              () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'MainStack' }],
                });
              },
              () => {},
            );
          },
        },
        {
          text: 'Нет',
        },
      ],
    );
  };

  return (
    <TripInfoPanelView
      routes={order.routes}
      cancelOrder={cancelOrder}
      car={order.car}
      collapse={collapse}
      panResPonder={panResPonder}
      driver={order.driver}
      price={order.price}
      phone={order.phone}
    />
  );
};

export default TripInfoPanelController;
