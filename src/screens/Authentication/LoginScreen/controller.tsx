import React, { useState } from 'react';
import { Props } from './connect';
import { LoginScreenView } from './view';
import { ROUTES } from '@constants/ROUTES';
import { Roles } from '@store/models/auth/types';

export const LoginScreenController = ({
  isLoading,
  login,
  navigation,
}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    const normalizedPhone = Number('998' + phoneNumber.split(' ').join(''));
    login({
      payload: {
        phone: normalizedPhone,
        role: Roles.CLIENT,
      },
      successCb: () => navigation.navigate(ROUTES.ENTER_CODE),
      errorCb: () => {},
    });
  };

  return (
    <LoginScreenView
      handleSubmit={handleSubmit}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}
      isLoading={isLoading}
    />
  );
};
