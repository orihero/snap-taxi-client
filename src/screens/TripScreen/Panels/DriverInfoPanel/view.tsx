import React from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import SelectedDestination from '@components/SelectedDestanation/SelectedDestination';
import DriverInfo from '@components/DriverInfo/DriverInfo';
import BottomMenuCurve from '../../../../assets/images/BottomMenuCurve';
import ComingIcon from '../../../../assets/images/ComingIcon';
import { Bold, Regular, SemiBold } from '@components/Layout/AppText';
import { localization } from '../../../../services/Localization';
import SwitchWithText from '@components/SwitchWithText';
import AirConditionIcon from '../../../../assets/images/AirConditionIcon';
import LocationIcon from '../../../../assets/images/LocationIcon';
import { Booking } from '@store/models/booking/types';
import OrderStatus from '@constants/orderStatus';

interface IProps {
  showMyLocation: () => void;
  currentBooking: Booking | null;
  isShow: boolean;
  isPressed: boolean;
  backgroundColor: any;
  panResPonder: any;
  coming: () => void;
  collapse: any;
  cancelBooking: () => void;
}

const DriverInfoPanelView = ({
  coming,
  isShow,
  collapse,
  isPressed,
  panResPonder,
  backgroundColor,
  showMyLocation,
  currentBooking,
}: IProps) => {
  return (
    <>
      <Animated.View
        style={[{ backgroundColor }, styles.overlay]}
        pointerEvents={'none'}
      />
      <View style={{ marginTop: 'auto' }}>
        <DriverInfo
          name={currentBooking?.driver?.name}
          phone={currentBooking?.driver?.phone}
          car={currentBooking?.car}
        />
        <View style={[styles.shadow]} {...panResPonder.panHandlers}>
          <BottomMenuCurve width={Dimensions.get('window').width - 32} />
          <View style={styles.container}>
            <View style={styles.draggable} />
            {currentBooking?.status !== OrderStatus.PROCESSING &&
              currentBooking?.status !== OrderStatus.WAITING && (
                <View style={styles.actionButtons}>
                  <TouchableOpacity
                    disabled={isPressed}
                    style={{ alignItems: 'center' }}
                    onPress={coming}>
                    <View
                      style={[
                        styles.icon,
                        isPressed && { backgroundColor: '#bdbdbd' },
                      ]}>
                      <ComingIcon />
                    </View>
                    <SemiBold style={{ marginTop: 10 }}>Выхожу</SemiBold>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={isShow}
                    onPress={showMyLocation}
                    style={{ alignItems: 'center' }}>
                    <View
                      style={[
                        styles.icon,
                        isShow && { backgroundColor: '#bdbdbd' },
                      ]}>
                      <LocationIcon />
                    </View>
                    <SemiBold style={{ marginTop: 10 }}>Где я</SemiBold>
                  </TouchableOpacity>
                </View>
              )}
            <Animated.View style={{ height: collapse, overflow: 'hidden' }}>
              <View style={styles.fee}>
                <Bold style={{ fontSize: 17 }}>{localization.fee}</Bold>
                <Bold style={{ fontSize: 17, marginLeft: 'auto' }}>
                  {currentBooking?.price}{' '}
                </Bold>
                <Regular style={{ lineHeight: 25 }}>сум</Regular>
              </View>
              <View style={styles.destinationWrapper}>
                <SelectedDestination
                  from={currentBooking?.routes[0]?.address}
                  to={currentBooking?.routes[1]?.address ?? 'Не указано'}
                  containerStyle={{ marginBottom: 10, paddingTop: 11 }}
                />
              </View>
              <SwitchWithText
                style={styles.switch}
                Icon={AirConditionIcon}
                text={localization.airCondition}
                setValue={() => {}}
                disabled
                value={currentBooking?.option_ids?.length}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default DriverInfoPanelView;
