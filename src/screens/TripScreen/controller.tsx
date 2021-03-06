import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import TripScreenView from './view';
import { Props } from './connect';
import OrderStatus from '@constants/orderStatus';

const TripScreenController = ({
  navigation,
  removeBooking,
  currentBooking,
  getDriverLocation,
}: Props) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      getDriverLocation();
    }, 5000);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  useEffect(() => {
    if (currentBooking?.status === OrderStatus.CANCELED) {
      Alert.alert(
        'Внимание',
        'Ваш заказ сорван сожалеем.\nПопробуйте найти другую машину.',
        [
          {
            text: 'OK',
            onPress: () => removeBooking(),
          },
        ],
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
    }
  }, [currentBooking?.status]);

  return <TripScreenView currentBooking={currentBooking} />;
};

export default TripScreenController;
