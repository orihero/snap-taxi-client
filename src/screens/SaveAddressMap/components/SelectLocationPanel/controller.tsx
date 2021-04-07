import React from 'react';
import SelectLocationPanelView from './view';
import { Props } from './connect';
import { useNavigation } from '@react-navigation/native';
const SelectLocationPanelController = ({
  isLoading,
  addressInfo,
  setAddress,
}: Props) => {
  const navigation = useNavigation();
  const finish = () => {
    setAddress(addressInfo);
    navigation.goBack();
  };
  return (
    <SelectLocationPanelView
      finish={finish}
      isLoading={isLoading}
      addressInfo={addressInfo}
    />
  );
};

export default SelectLocationPanelController;
