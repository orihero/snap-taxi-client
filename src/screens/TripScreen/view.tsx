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
import {localization} from "../../services/Localization";

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

  const subText = () => {
    switch (currentBooking?.status) {
      case OrderStatus.ACCEPTED:
        return localization.accepted;
      case OrderStatus.PROCESSING:
        return localization.onWay;
      case OrderStatus.WAITING:
        return localization.carWaiting;
      case OrderStatus.ARRIVED:
        return localization.carArrived;
      default:
        return ''
    }
  }

  return (
    <>
      <RateOrderModal />
      <View style={styles.container}>
        <Header gradient={false} subText={subText()} />
        {renderPanel()}
        {useIsFocused() && <Map mapRef={mapRef} setMapRef={setMapRef} />}
      </View>
    </>
  );
};

export default TripScreenView;
