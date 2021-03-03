import React from 'react';
import { Animated, View } from 'react-native';

import styles from './styles';
import Button from '@components/Button';
import SelectedDestination from '@components/SelectedDestanation/SelectedDestination';
import DriverInfo from '@components/DriverInfo/DriverInfo';
import BottomMenuCurve from '@assets/images/BottomMenuCurve';
import { localization } from '../../../../services/Localization';
import { Bold, Regular } from '@components/Layout/AppText';
import Screen from '../../../../helpers/Dimensions';
import { Booking } from '@store/models/booking/types';

interface IProps {
  currentBooking: Booking | null;
  cancelOrder: () => void;
  collapse;
  panResPonder;
}

const TripInfoPanelView = ({
  collapse,
  cancelOrder,
  panResPonder,
  currentBooking,
}: IProps) => {
  return (
    <>
      <View style={{ marginTop: 'auto' }}>
        <DriverInfo
          name={currentBooking?.driver?.name}
          phone={currentBooking?.driver?.phone}
          car={currentBooking?.car}
        />
        <View style={styles.shadow} {...panResPonder.panHandlers}>
          <BottomMenuCurve width={Screen.width - 32} />
          <View style={styles.container}>
            <Animated.View style={{ height: collapse, overflow: 'hidden' }}>
              <View style={styles.draggable} />
              <View style={styles.fee}>
                <Bold style={{ fontSize: 17 }}>{localization.fee}</Bold>
                <Bold style={styles.tripFee}>{currentBooking?.price} </Bold>
                <Regular style={{ lineHeight: 25 }}>сум</Regular>
              </View>
              <SelectedDestination
                from={currentBooking?.routes[0].address}
                to={currentBooking?.routes[1]?.address ?? 'Не указано'}
                containerStyle={{ marginBottom: 17, paddingTop: 11 }}
              />
              <View>
                <Button title={localization.cancelTrip} onPress={cancelOrder} />
              </View>
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TripInfoPanelView;
