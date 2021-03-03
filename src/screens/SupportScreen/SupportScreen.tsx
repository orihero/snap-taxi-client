import React from 'react';
import { View, Image, Linking, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Bold, Regular, SemiBold } from '@components/Layout/AppText';
import ChatIcon from '@assets/images/ChatIcon';

const SupportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <View>
          <Bold>Контакты</Bold>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 50,
            }}>
            <Regular>Служба поодержки:</Regular>
            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+998555022525')}>
              <SemiBold>+998 55 502 25 25</SemiBold>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SupportChat')}>
            <View style={styles.chatIcon}>
              <ChatIcon />
            </View>
          </TouchableOpacity>
          <Regular style={{ flex: 1, marginRight: 30, fontSize: 12 }}>
            Для улучшения нашего сервиса. Отправьте ваше комментарии или жалобу
            или пожелания в CALL- CENTR . Для нас это очень важно. Берегите себя
            и своих близких .
          </Regular>
        </View>
        <Image
          source={require('../../assets/images/calls.jpg')}
          resizeMode={'contain'}
          style={{
            width: '100%',
            height: 300,
          }}
        />
      </View>
    </View>
  );
};

export default SupportScreen;
