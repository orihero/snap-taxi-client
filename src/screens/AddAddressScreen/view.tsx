import React from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { Light, Regular } from '@components/Layout/AppText';
import Button from '@components/Button';
import { localization } from '../../services/Localization';
import { Address } from '@store/models/user/types';
import LocationIcon from '@assets/images/LocationIcon';
import TrashIcon from '@assets/images/TrashIcon';
import Colors from '@assets/styles/Colors';

interface IProps {
  title: string;
  edit: boolean;
  isDeleteLoading: boolean;
  setTitle: (title: string) => void;
  deleteAddressItem: () => void;
  isLoading: boolean;
  address: Address | null;
  saveAddress: () => void;
  navigate: (params?: any) => () => void;
}

const AddAddressScreenView = ({
  saveAddress,
  address,
  setTitle,
  title,
  isLoading,
  navigate,
  edit,
  deleteAddressItem,
  isDeleteLoading,
}: IProps) => {
  return (
    <KeyboardAvoidingView behavior={'height'} style={styles.container}>
      <View style={styles.inputWrapper}>
        <Light>Название</Light>
        <TextInput
          placeholder={'Напишите названия'}
          placeholderTextColor={'#000'}
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Light>Адрес</Light>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            editable={false}
            placeholder={'Впишите адрес'}
            placeholderTextColor={'#000'}
            style={styles.input}
            value={address?.address}
          />
          <TouchableOpacity onPress={navigate()} style={styles.mapTextWrapper}>
            <Regular>{localization.map}</Regular>
            <LocationIcon style={{ marginLeft: 10.46 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 'auto' }}>
        {edit && (
          <TouchableOpacity
            disabled={isDeleteLoading}
            style={styles.delete}
            onPress={deleteAddressItem}>
            {isDeleteLoading ? (
              <ActivityIndicator color={Colors.blue} />
            ) : (
              <TrashIcon />
            )}
          </TouchableOpacity>
        )}
        <Button
          isLoading={isLoading}
          onPress={saveAddress}
          title={edit ? localization.save : localization.addAddress}
          containerStyle={{ marginBottom: 33 }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddAddressScreenView;
