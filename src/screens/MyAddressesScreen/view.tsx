import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';
import MyAddressesIcon from '../../assets/images/MyAddressesIcon';
import ArrowIcon from '../../assets/images/ArrowIcon';
import { Bold, Light } from '@components/Layout/AppText';
import Button from '@components/Button';
import { localization } from '../../services/Localization';
import LocationIcon from '@assets/images/LocationIcon';
import { Address } from '@store/models/user/types';
import { ROUTES } from '@constants/ROUTES';

interface IProps {
  savedAddresses: Address[];
  navigate: (route: ROUTES, params?: any) => () => void;
}

const MyAddressesScreenView = ({ savedAddresses, navigate }: IProps) => {
  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 40, paddingBottom: 20 }}>
        <MyAddressesIcon style={styles.topIcon} />
        <View style={styles.container}>
          {savedAddresses.map((svAdd) => (
            <TouchableOpacity
              style={styles.addressItem}
              onPress={navigate(ROUTES.ADD_ADDRESS, svAdd)}>
              <LocationIcon style={{ marginRight: 20 }} />
              <View>
                <Light style={{ color: '#AAAEB7' }}>{svAdd.title}</Light>
                <Bold style={{ fontWeight: 'bold' }}>{svAdd.address}</Bold>
              </View>
              <ArrowIcon style={{ marginLeft: 'auto' }} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View
        style={{ marginTop: 'auto', marginBottom: 20, marginHorizontal: 15 }}>
        <Button
          onPress={navigate(ROUTES.ADD_ADDRESS)}
          title={localization.addAddress}
        />
      </View>
    </>
  );
};

export default MyAddressesScreenView;
