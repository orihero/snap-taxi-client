import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import Button from '@components/Button';
import { localization } from '../../../../services/Localization';
import { Bold } from '@components/Layout/AppText';

interface IProps {
  to: string;
  from: string;
  isLoading: boolean;
  cancelBooking: () => void;
}

const CancelBookingPanelView = ({
  to,
  from,
  isLoading,
  cancelBooking,
}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.selectDest}>
        <TouchableWithoutFeedback>
          <View style={{ marginLeft: 5, flex: 1 }}>
            <View>
              <View
                style={[
                  styles.row,
                  { borderBottomWidth: 1, borderBottomColor: '#dddddd' },
                ]}>
                <View style={[styles.addressCircle]} />
                <Bold style={styles.directionText}>{from}</Bold>
              </View>
            </View>
            {to && (
              <View>
                <View style={styles.row}>
                  <View style={[styles.addressCircle, styles.redColor]} />
                  <Bold style={styles.directionText}>{to}</Bold>
                </View>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          isLoading={isLoading}
          title={localization.cancel}
          onPress={cancelBooking}
        />
      </View>
    </View>
  );
};

export default CancelBookingPanelView;
