import React, { useEffect } from 'react';
import { Alert, AppState } from 'react-native';

import TripScreenView from './view';
import NetInfo from '@react-native-community/netinfo';

const TripScreenController = ({
  order,
  navigation,
  ChangeOrderStatus,
  GetOrderInfo,
}) => {
  useEffect(() => {
    const handler = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        establishProcess();
      } else if (state === 'background') {

      }
    });

    const netInfoEvent = NetInfo.addEventListener((state) => {
      establishProcess();
    });

    establishProcess();

    return () => {
      AppState.removeAllListeners('change', handler);
      netInfoEvent();
    };
  }, []);

  useEffect(() => {
    if (order.status === 'canceled') {
      Alert.alert(
        'Внимание',
        'Уважаемый клиент в ближайшие время нет свободных машин. По пробуйте заказать по другому тарифу.',
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      });
    }
  }, [order.status]);

  const establishProcess = () => {
    if (order.id && order.status !== 'canceled') {
      GetOrderInfo(order.id, (data) => {
        ChangeOrderStatus(data);
      });
    }
  };

  return <TripScreenView order={order} orderStatus={order.status} />;
};

export default TripScreenController;
