import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import styles from './styles';
import PhoneIcon from '../../../assets/images/PhoneIcon';
import Button from '../../../components/Button';
import { Bold, Regular, SemiBold } from '../../../components/Layout/AppText';
import RegistrationTop from '../../../components/RegistrationTop/RegistrationTop';
import { TextInputMask } from 'react-native-masked-text';

const RegistrationScreenView = ({
  handleSubmit,
  setPhoneNumber,
  isLoading,
  phoneNumber,
}) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
      <RegistrationTop />
      <View style={styles.registrationContainer}>
        <View style={{ alignItems: 'center' }}>
          <SemiBold>Здраствуйте, мы рады что Вы выбрали нас</SemiBold>
          <Bold style={styles.heading}>Давайте зарегистрируем Вас</Bold>
        </View>
        <View style={styles.registrationForm}>
          <PhoneIcon style={styles.phoneIcon} />
          <Regular style={styles.prefix}>+998</Regular>
          <TextInputMask
            keyboardType={'number-pad'}
            placeholder={'Введите Ваш номер'}
            style={styles.mask}
            type={'custom'}
            options={{
              mask: '99 999 99 99',
            }}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Regular style={styles.auth}>
            Авторизуйтесь, вы полностью соглашаетесь с нашими
          </Regular>
          <Bold style={styles.privacy}>
            правилами сервиса и Публичной афертой
          </Bold>
        </View>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Button
          isLoading={isLoading}
          title={'Отправить'}
          containerStyle={{ marginBottom: 20 }}
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreenView;
