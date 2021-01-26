import React from 'react';
import { View, Dimensions, Animated, TouchableOpacity } from 'react-native';

import styles from './styles';
import SelectedDestination from '../../../../components/SelectedDestanation/SelectedDestination';
import DriverInfo from '../../../../components/DriverInfo/DriverInfo';
import BottomMenuCurve from '../../../../assets/images/BottomMenuCurve';
import ComingIcon from '../../../../assets/images/ComingIcon';
import { Bold, Regular, SemiBold } from '../../../../components/Layout/AppText';
import { localization } from '../../../../services/Localization';
import SwitchWithText from '../../../../components/SwitchWithText';
import AirConditionIcon from '../../../../assets/images/AirConditionIcon';
import LocationIcon from '../../../../assets/images/LocationIcon';

const DriverInfoPanelView = ({
  backgroundColor,
  panResPonder,
  airCondition,
  collapse,
  routes,
  status,
  isPressed,
  driver,
  price,
  car,
  coming,
  showMyLocation,
  isShow,
}) => {
  return (
    <>
      <Animated.View
        style={[{ backgroundColor }, styles.overlay]}
        pointerEvents={'none'}
      />
      <View style={{ marginTop: 'auto' }}>
        <DriverInfo
          name={driver && driver.name}
          phone={driver?.phone}
          car={car}
        />
        <View style={[styles.shadow]} {...panResPonder.panHandlers}>
          <BottomMenuCurve width={Dimensions.get('window').width - 32} />
          <View style={styles.container}>
            <View style={styles.draggable} />
            {status !== 'processing' && status !== 'waiting' && (
              <View style={styles.actionButtons}>
                <TouchableOpacity
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
                {!isShow && (
                  <>
                    <View style={[{ marginHorizontal: 38 }]} />
                    <TouchableOpacity
                      onPress={showMyLocation}
                      style={{ alignItems: 'center' }}>
                      <View style={styles.icon}>
                        <LocationIcon />
                      </View>
                      <SemiBold style={{ marginTop: 10 }}>Где я</SemiBold>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            )}
            <Animated.View style={{ height: collapse, overflow: 'hidden' }}>
              <View style={styles.fee}>
                <Bold style={{ fontSize: 17 }}>{localization.fee}</Bold>
                <Bold style={{ fontSize: 17, marginLeft: 'auto' }}>
                  {price}{' '}
                </Bold>
                <Regular style={{ lineHeight: 25 }}>сум</Regular>
              </View>
              <View style={styles.destinationWrapper}>
                <SelectedDestination
                  containerStyle={{ marginBottom: 10, paddingTop: 11 }}
                  from={routes[0] ? routes[0].address : ''}
                  to={routes[1] ? routes[1].address : 'Не указано'}
                />
              </View>
              <SwitchWithText
                style={styles.switch}
                Icon={AirConditionIcon}
                text={localization.airCondition}
                setValue={() => {}}
                disabled
                value={airCondition}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </>
  );
};

export default DriverInfoPanelView;
