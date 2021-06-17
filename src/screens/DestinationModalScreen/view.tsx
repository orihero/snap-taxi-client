import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import styles from './styles';
import BackButtonIcon from '../../assets/images/BackButtonIcon';
import { Regular, SemiBold } from '@components/Layout/AppText';
import { localization } from '../../services/Localization';
import CancelIcon from '@assets/images/CancelIcon';

interface IProps {
  visible: boolean;
  originResults: any;
  closeModal: () => void;
  selectOnMap: () => void;
  destinationText: string;
  destinationResults: any;
  searchOrigin: () => void;
  originLocationText: string;
  onAddressSelect: () => void;
  searchDestination: (text: string) => void;
}

const DestinationModalScreenView = ({
  visible,
  closeModal,
  selectOnMap,
  searchOrigin,
  originResults,
  destinationText,
  onAddressSelect,
  searchDestination,
  originLocationText,
  destinationResults,
}: IProps) => {
  const [isFocused, setIsFocused] = useState(true);
  return (
    <Modal visible={visible} onRequestClose={closeModal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btn} onPress={closeModal}>
            <BackButtonIcon />
          </TouchableOpacity>
          <SemiBold style={styles.title}>Пункт назначение</SemiBold>
        </View>
        <View style={[styles.selected]}>
          <View style={{ marginLeft: 13, flex: 1 }}>
            <View style={styles.row}>
              <View style={[styles.addressCircle]} />
              <TextInput
                onChangeText={searchOrigin}
                value={originLocationText}
                onFocus={() => setIsFocused(false)}
                placeholder={'Введите место подачи'}
                style={[styles.directionText, styles.input]}
              />
              {!!originLocationText && (
                <TouchableOpacity
                  onPress={() => searchOrigin('')}
                  style={{
                    right: 50,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <CancelIcon />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={[styles.addressCircle, { backgroundColor: 'red' }]}
                />
                <TextInput
                  value={destinationText}
                  onChangeText={searchDestination}
                  onFocus={() => setIsFocused(true)}
                  placeholder={localization.whereAreWeGoing}
                  style={[styles.directionText, styles.input]}
                />
                {!!destinationText && (
                  <TouchableOpacity
                    onPress={() => searchDestination('')}
                    style={{
                      right: 80,
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <CancelIcon />
                  </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.map} onPress={selectOnMap}>
                  <Regular>Карта</Regular>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {isFocused ? (
        <FlatList
          style={{ flex: 1, marginTop: 20 }}
          contentContainerStyle={styles.flatList}
          data={destinationResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.address}
              key={item.GeoObject.name}
              onPress={() => onAddressSelect(item, true)}>
              <SemiBold>{item.GeoObject.name}</SemiBold>
              <Regular style={styles.addressDescription}>
                {item.GeoObject.description}
              </Regular>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          style={{ flex: 1, marginTop: 20 }}
          contentContainerStyle={styles.flatList}
          data={originResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.address}
              key={item.GeoObject.name}
              onPress={() => onAddressSelect(item, false)}>
              <SemiBold>{item.GeoObject.name}</SemiBold>
              <Regular style={styles.addressDescription}>
                {item.GeoObject.description}
              </Regular>
            </TouchableOpacity>
          )}
        />
      )}
    </Modal>
  );
};

export default DestinationModalScreenView;
