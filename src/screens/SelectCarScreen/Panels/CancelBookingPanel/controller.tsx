import React from 'react';
import CancelBookingPanelView from './view';
import { Props } from './connect';
import { Alert } from 'react-native';

const CancelBookingController = ({
  mapRef,
  isLoading,
  currentLocation,
  cancelBooking,
  destinationInfo,
  currentLocationInfo,
}: Props) => {
  const cancel = () => {
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
        },
      ],
    );
  };
  return (
    <CancelBookingPanelView
      to={destinationInfo?.name as string}
      from={currentLocationInfo?.name as string}
      isLoading={isLoading}
      cancelBooking={cancel}
    />
  );
};

export default CancelBookingController;
