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
  currentLocation,
  isSelectingOnMap,
  setDestinationInfo,
  setIsSelectingOnMap,
}: Props) => {
  const [mapRef, setMapRef] = useState<any>();
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);
  useBackHandler(() => {
    if (isSelectingOnMap) {
      setIsSelectingOnMap(false);
      return true;
    }

    if(currentBooking){
      cancel();
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
    if (currentBooking?.status === OrderStatus.NEW && timeoutId === undefined) {
      mapRef?.animateToRegion(
        {
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          latitudeDelta: 0.003 * 3,
          longitudeDelta: 0.003 * 3,
        },
        15000,
      );
      const id = BackgroundTimer.setTimeout(() => {
        cancelBooking({
          payload: null,
        });
        Alert.alert(
          'Внимание',
          'Уважаемый клиент в ближайшие время нет свободных машин, попробуйте  заказать по другому тарифу.',
        );
        setTimeoutId(undefined);
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
      BackgroundTimer.clearInterval(timeoutId as number);
      setTimeoutId(undefined);
      setCurrent(null);
    }
  }, [currentBooking?.status]);


  const cancel = () => {
    return Alert.alert(
        'Отмена заказа',
        'Вы действительно хотите отменить заказ ?',
        [
          {
            text: 'Да',
            onPress: () => cancelBooking({ payload: null }),
          },
          {
            text: 'Нет',
          },
        ],
    );
  };

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
