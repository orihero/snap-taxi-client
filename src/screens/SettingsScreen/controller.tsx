import React, { useState } from 'react';
import { Alert } from 'react-native';
import SettingsScreenView from './view';
import { Props } from './connect';

const Controller = ({ logout, profile, navigation }: Props) => {
  const [showTrafficJams, setShowTrafficJams] = useState(false);
  const [acceptCall, setAcceptCall] = useState(profile.canCall);
  const [sale, setSale] = useState(false);
  const [name, setName] = useState(profile.name);
  const [isLoading, setIsLoading] = useState(false);

  const routeTo = (routeName) => () => {
    navigation.navigate(routeName);
  };

  const logoutHandler = () => {
    Alert.alert(
      'Выйти из аккаунта',
      'Вы уверены что хотите выйти из аакунта?',
      [{ text: 'Отмена' }, { text: 'Выйти', onPress: logout }],
    );
  };
  const save = () => {
    setIsLoading(true);
    updateProfile(
      {
        name,
        canCall: acceptCall,
      },
      () => {
        setIsLoading(false);
        Alert.alert('Успешно', 'Изменение успешно сохранено.');
      },
      () => {
        setIsLoading(false);
      },
    );
  };

  return (
    <SettingsScreenView
      setters={{
        setShowTrafficJams,
        setAcceptCall,
        setSale,
        setName,
      }}
      values={{
        showTrafficJams,
        acceptCall,
        sale,
        name,
        isLoading,
      }}
      logout={logoutHandler}
      save={save}
      routeTo={routeTo}
    />
  );
};

export default Controller;
