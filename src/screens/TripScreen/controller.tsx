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
        'Уважаемый клиент в ближайшие время нет свободных машин. По пробуйте заказать по другому тарифу.',
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
      removeBooking();
    }
  }, [currentBooking?.status]);

  return <TripScreenView currentBooking={currentBooking} />;
};

export default TripScreenController;
