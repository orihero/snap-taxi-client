import React from 'react';
import { useNavigation } from '@react-navigation/native';
import TripInfoPanelView from './view';
import { Alert } from 'react-native';

const TripInfoPanelController = ({ order, CancelOrder }) => {
  const navigation = useNavigation();

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
      driver={order.driver}
      price={order.price}
      phone={order.phone}
    />
  );
};

export default TripInfoPanelController;
