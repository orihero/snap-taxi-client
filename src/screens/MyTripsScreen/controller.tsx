import React, { useEffect } from 'react';
import MyTripsScreenView from './view';
import { Props } from './connect';

const OrdersScreenController = ({ getList, list, isLoading }: Props) => {
  useEffect(() => {
    getList();
  }, []);

  return <MyTripsScreenView list={list} isLoading={isLoading} />;
};
export default OrdersScreenController;
