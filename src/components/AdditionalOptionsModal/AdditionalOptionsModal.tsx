import React, { useRef, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';

import styles from './styles';
import CustomModal from '../CustomModal/CustomModal';
import Button from '../Button';
import AdditionalOptionsModalIcon from '../../assets/images/AdditionalOptionsModalIcon';
import AirConditionIcon from '../../assets/images/AirConditionIcon';
import { Bold } from '../Layout/AppText';
import { localization } from '../../services/Localization';
import SwitchWithText from '../SwitchWithText';
import ChatIcon from '@assets/images/ChatIcon';
import TextWithIcon from '@components/SwitchWithText/TextWithIcon';

const AdditionalOptionsModal = ({
  visible,
  closeModal,
  airCondition,
  showBottomSheet,
  setAirCondition,
}: any) => {
  return (
    <>
      <CustomModal visible={visible} closeModal={closeModal}>
        <View>
          <KeyboardAvoidingView behavior={'position'}>
            <AdditionalOptionsModalIcon style={styles.icon} />
            <Bold style={styles.heading}>{localization.yourDesire}</Bold>
            <View style={{ marginHorizontal: 10 }}>
              <SwitchWithText
                style={{ borderTopWidth: 1 }}
                Icon={AirConditionIcon}
                text={localization.airCondition}
                // subText={'Цена 15% от общей суммы'}
                setValue={setAirCondition}
                value={airCondition}
              />
              {/*<SwitchWithText*/}
              {/*    disabled*/}
              {/*    Icon={DiscountIcon}*/}
              {/*    text={'Использовать купон'}*/}
              {/*    setValue={setCoupon}*/}
              {/*    value={coupon}*/}
              {/*/>*/}
              <TouchableOpacity
                onPress={showBottomSheet}
                style={[styles.comment, styles.shadow]}>
                <TextWithIcon Icon={ChatIcon} active={false}>
                  {localization.comment}
                </TextWithIcon>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        <Button onPress={closeModal} title={localization.understandable} />
      </CustomModal>
    </>
  );
};

export default AdditionalOptionsModal;
