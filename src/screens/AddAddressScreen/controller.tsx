import React, { useState } from 'react';
import AddAddressScreenView from './view';
import { Props } from './connect';
import { ROUTES } from '@constants/ROUTES';
import { Alert } from 'react-native';

const AddAddressScreenController = ({
  saveAddress,
  navigation,
  isLoading,
  isEditLoading,
  editSavedAddress,
  deleteAddress,
  isDeleteLoading,
  route,
}: Props) => {
  const [address, setAddress] = useState<any>(
    route.params
      ? {
          ...route.params,
          coords: {
            latitude: route.params.lat,
            longitude: route.params.lng,
          },
        }
      : {},
  );
  const [title, setTitle] = useState(route.params?.title ?? '');
  const save = () => {
    if (title && address.coords) {
      if (!!route.params) {
        return editSavedAddress({
          payload: {
            id: route.params.id,
            data: {
              title,
              address: address.address,
              lat: address.coords.latitude.toString(),
              lng: address.coords.longitude.toString(),
            },
          },
          successCb: () => navigation.goBack(),
        });
      }
      saveAddress({
        payload: {
          title,
          address: address.address,
          lat: address.coords.latitude.toString(),
          lng: address.coords.longitude.toString(),
        },
        successCb: () => navigation.goBack(),
      });
    }
  };

  const navigate = (params?: any) => () => {
    navigation.navigate(ROUTES.SELECT_ADDRESS_MAP, {
      setAddress,
      ...address.coords,
      ...params,
    });
  };

  const deleteAddressItem = () => {
    Alert.alert('Внимание', 'Вы действительно хотите удалить аддресс?', [
      {
        onPress: () =>
          deleteAddress({
            payload: route.params.id,
            successCb: () => navigation.goBack(),
          }),
        text: 'Да',
      },
      {
        text: 'Нет',
      },
    ]);
  };

  return (
    <AddAddressScreenView
      edit={!!route.params}
      title={title}
      setTitle={setTitle}
      navigate={navigate}
      address={address}
      saveAddress={save}
      deleteAddressItem={deleteAddressItem}
      isDeleteLoading={isDeleteLoading}
      isLoading={!route.params ? isLoading : isEditLoading}
    />
  );
};
export default AddAddressScreenController;
