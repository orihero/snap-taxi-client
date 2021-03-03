import React from 'react';
import { View, TouchableNativeFeedback, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import BackButtonIcon from '../../assets/images/BackButtonIcon';
import Colors from '../../assets/styles/Colors';
import { Bold } from '../Layout/AppText';
import DriverPhoneIcon from '../../assets/images/DriverPhoneIcon';

interface IProps {
  title: string;
  right?: boolean;
  style?: any;
}

const PageHeader = ({ title, right, style }: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}>
          <View style={{ position: 'absolute', left: 16 }}>
            <BackButtonIcon />
          </View>
        </TouchableNativeFeedback>

        <Bold style={styles.title}>{title}</Bold>
        {right && (
          <TouchableNativeFeedback
            onPress={() => Linking.openURL(`tel:+998555022525`)}
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}>
            <View style={{ position: 'absolute', right: 16 }}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: Colors.background,
                  borderRadius: 250,
                  borderWidth: 2,
                  borderColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <DriverPhoneIcon />
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};

export default PageHeader;
