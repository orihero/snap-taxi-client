import React from 'react';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { Map } from '../Map';
import Header from '@components/Header/Header';
import GetCurrentLocationButton from '@components/GetCurrentLocationButton';
import { BookingPanel } from './Panels/BookingPanel';
import { CancelBookingPanel } from './Panels/CancelBookingPanel';
import { Booking } from '@store/models/booking/types';
import OrderStatus from '@constants/orderStatus';
import { SelectLocationPanel } from './Panels/SelectLocationPanel';

interface IProps {
  mapRef: any;
  cancel: any;
  setMapRef: (arg: any) => void;
  isSelectingOnMap: boolean;
  currentBooking: Booking | null;
}

const SelectCarScreenView = ({
  mapRef,
  cancel,
  setMapRef,
  currentBooking,
  isSelectingOnMap,
}: IProps) => {
  const renderPanel = () => {
    switch (currentBooking?.status) {
      case OrderStatus.NEW:
        return <CancelBookingPanel cancel={cancel} />;
      default:
        return <BookingPanel mapRef={mapRef} />;
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexGrow: 1 }}>
        <Header
          goBack={!currentBooking}
          gradient={false}
          subText={'Детали заказа'}
        />
        {useIsFocused() && (
          <Map
            secondPage={true}
            mapRef={mapRef}
            markerPosition
            setMapRef={setMapRef}
          />
        )}
      </View>
      <View>
        <View style={{ marginTop: 'auto' }}>
          <View style={{ marginRight: 10, top: 10 }}>
            <GetCurrentLocationButton mapRef={mapRef} secondPage />
          </View>
          {isSelectingOnMap ? <SelectLocationPanel /> : renderPanel()}
        </View>
      </View>
    </View>
  );
};

export default SelectCarScreenView;
