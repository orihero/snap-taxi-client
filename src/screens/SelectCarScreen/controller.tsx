import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import SelectCarScreenView from './view';
import BackgroundTimer from 'react-native-background-timer';
import { Props } from './connect';
import OrderStatus from '@constants/orderStatus';
import { ROUTES } from '@constants/ROUTES';
import { useBackHandler } from '@react-native-community/hooks';

const SelectCarScreenController = ({
  navigation,
  setCurrent,
  setDistance,
  cancelBooking,
  currentBooking,
  setBookingStatus,
  isSelectingOnMap,
  setDestinationInfo,
  setIsSelectingOnMap,
}: Props) => {
  const [mapRef, setMapRef] = useState();
  const [timeoutId, setTimeoutId] = useState<number>();
  useBackHandler(() => {
    if (isSelectingOnMap) {
      setIsSelectingOnMap(false);
      return true;
    }
    setDestinationInfo(null);
    return false;
  });

  useEffect(() => {
    return () => {
      setIsSelectingOnMap(false);
      setDestinationInfo(null);
      setDistance(0);
    };
  }, []);

  useEffect(() => {
    if (currentBooking?.status === OrderStatus.NEW && !timeoutId) {
      const id = BackgroundTimer.setTimeout(() => {
        cancelBooking({
          payload: null,
        });
        Alert.alert(
          'Внимание',
          'Уважаемый клиент в ближайшие время нет свободных машин, попробуйте  заказать по другому тарифу.',
        );
      }, 120000);
      setTimeoutId(id as number);
    }
    if (currentBooking?.status === OrderStatus.ACCEPTED) {
      BackgroundTimer.clearInterval(timeoutId as number);
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.TRIP }],
      });
    }

    if (currentBooking?.status === OrderStatus.CANCELED) {
      setCurrent(null);
    }
  }, [currentBooking?.status]);

  return (
    <SelectCarScreenView
      mapRef={mapRef}
      setMapRef={setMapRef}
      currentBooking={currentBooking}
      isSelectingOnMap={isSelectingOnMap}
    />
  );
};

export default SelectCarScreenController;
