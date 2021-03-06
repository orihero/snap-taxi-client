import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';
import CloudIcon from '../../assets/images/CloudIcon';
import Screen from '../../helpers/Dimensions';

const CloudIcons = () => (
  <>
    <CloudIcon height={32.37} width={50.24} style={{ top: 20, right: 15.26 }} />
    <CloudIcon
      height={42.65}
      width={76.74}
      style={{ bottom: 198.35, left: 86 }}
    />
    <CloudIcon height={37.24} width={67} style={{ bottom: 83.76, left: 20 }} />
    <CloudIcon
      height={60.58}
      width={109}
      style={{ bottom: 23.35, right: 28 }}
    />
  </>
);

const RegistrationTop = () => {
  return (
    <View style={styles.top}>
      {Screen.height > 700 && <CloudIcons />}
         <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
    </View>
  );
};

export default RegistrationTop;
