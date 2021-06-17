import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import CustomModal from '../CustomModal/CustomModal';
import CarModalIcon from '../../assets/images/CarModalIcon';
import Button from '../Button';
import { Bold, Regular } from '../Layout/AppText';
import { localization } from '../../services/Localization';

const Description = ({ leftText, rightText }: any) => (
  <View style={styles.textContainer}>
    <Regular style={{ fontSize: 15, color: '#AAAEB7' }}>{leftText}</Regular>
    <Bold style={{ fontSize: 15 }}>{rightText}</Bold>
  </View>
);

const PlanItemInfoModal = ({ visible, closeModal, rateInfo }: any) => {
  return (
    <CustomModal visible={visible} closeModal={closeModal}>
      <CarModalIcon style={styles.icon} />
      {rateInfo.info &&
        rateInfo.info.split(';').map((item: string) => {
          const text = item.split(':');
          if (text[0] && text[1])
            return <Description leftText={text[0]} rightText={text[1]} />;
        })}
      <Button onPress={closeModal} title={localization.understandable} />
    </CustomModal>
  );
};

export default PlanItemInfoModal;
