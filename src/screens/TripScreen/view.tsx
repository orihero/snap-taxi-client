import React, { useState } from 'react';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import styles from './styles';
import { Map } from '../Map';
import Header from '@components/Header/Header';
import DriverInfoPanel from './Panels/DriverInfoPanel';
import TripInfoPanel from './Panels/TripInfoPanel';
import RateOrderModal from '../RateOrderModal';
import { Booking } from '@store/models/booking/types';
import OrderStatus from '@constants/orderStatus';
import MapView from 'react-native-maps';

interface IProps {
  currentBooking: Booking | null;
}

const TripScreenView = ({ currentBooking }: IProps) => {
  const [mapRef, setMapRef] = useState<MapView | null>(null);

  const renderPanel = () => {
    switch (currentBooking?.status) {
      case OrderStatus.ACCEPTED:
        return <TripInfoPanel />;
      default:
        return <DriverInfoPanel />;
    }
  };

  return (
    <>
      <RateOrderModal />
      <View style={styles.container}>
        <Header gradient={false} />
        {renderPanel()}
        {useIsFocused() && <Map mapRef={mapRef} setMapRef={setMapRef} />}
      </View>
    </>
  );
};

export default TripScreenView;
