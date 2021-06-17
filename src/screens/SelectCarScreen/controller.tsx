import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import SelectCarScreenView from './view';
import { Props } from './connect';
import OrderStatus from '@constants/orderStatus';
import { ROUTES } from '@constants/ROUTES';
import { useBackHandler } from '@react-native-community/hooks';

const SelectCarScreenController = ({
  navigation,
  setCurrent,
  setDistance,
  cancelBooking,
  removeBooking,
  currentBooking,
  currentLocation,
  isSelectingOnMap,
  setDestinationInfo,
  setIsSelectingOnMap,
}: Props) => {
  const [mapRef, setMapRef] = useState<any>();
  useBackHandler(() => {
    if (isSelectingOnMap) {
      setIsSelectingOnMap(false);
      return true;
    }

    if (currentBooking) {
      cancel();
      return true;
    }

    setDestinationInfo(null);
    return false;
  });

  const [isUserCanceled, setIsUserCanceled] = useState(false);

  useEffect(() => {
    return () => {
      setIsSelectingOnMap(false);
      setDestinationInfo(null);
      setDistance(0);
    };
  }, []);

  useEffect(() => {
    if (currentBooking?.status === OrderStatus.NEW) {
      mapRef?.animateToRegion(
        {
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          latitudeDelta: 0.003 * 3,
          longitudeDelta: 0.003 * 3,
        },
        15000,
      );
    }
    if (currentBooking?.status === OrderStatus.ACCEPTED) {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.TRIP }],
      });
    }

    if (currentBooking?.status === OrderStatus.CANCELED) {
      if (!isUserCanceled) {
        setIsUserCanceled(false);
        Alert.alert(
          'Внимание',
          'Ваш заказ сорван сожалеем.\nПопробуйте найти другую машину.',
          [
            {
              text: 'OK',
            },
          ],
        );
      }
      removeBooking();
    }
  }, [currentBooking?.status]);

  const cancel = () => {
    setIsUserCanceled(true);
    return Alert.alert(
      'Отмена заказа',
      'Вы действительно хотите отменить заказ ?',
      [
        {
          text: 'Да',
          onPress: () => {
            cancelBooking({
              payload: null,
              successCb: () => {
                mapRef.animateToRegion(
                  {
                    latitude: currentLocation?.latitude,
                    longitude: currentLocation?.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                  },
                  150,
                );
              },
            });
          },
        },
        {
          text: 'Нет',
          onPress: () => setIsUserCanceled(false),
        },
      ],
    );
  };

  return (
    <SelectCarScreenView
      mapRef={mapRef}
      cancel={cancel}
      setMapRef={setMapRef}
      currentBooking={currentBooking}
      isSelectingOnMap={isSelectingOnMap}
    />
  );
};

export default SelectCarScreenController;
