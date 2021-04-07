import React from 'react';
import MyAddressesScreenView from './view';
import { Props } from './connect';
import { ROUTES } from '@constants/ROUTES';

const OrdersScreenController = ({ savedAddresses, navigation }: Props) => {
  const navigate = (route: ROUTES, params?: any) => () => {
    navigation.navigate(route, params);
  };

  return (
    <MyAddressesScreenView
      savedAddresses={savedAddresses}
      navigate={navigate}
    />
  );
};
export default OrdersScreenController;
