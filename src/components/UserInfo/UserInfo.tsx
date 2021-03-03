import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import ProfileImageIcon from '../../assets/images/ProfileImageIcon';
import { Bold, Regular } from '../Layout/AppText';
import { localization } from '../../services/Localization';
import Avatar from '../Avatar';
import api from '../../services/api';

const UserInfo = ({
  phoneNumber,
  name,
  avatarImage,
  updateProfile,
  id,
}: any) => {
  const [avatar, setAvatar] = useState(avatarImage);

  const handleSubmit = (ava: any) => {
    const formData = new FormData();
    formData.append('avatar', {
      uri: ava.uri,
      type: ava.type,
      name: ava.fileName,
    });

    updateProfile({
      payload: formData,
      successCb: () => {
        setAvatar(ava);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Avatar
        avatar={avatar}
        setAvatar={setAvatar}
        handleSubmit={handleSubmit}
        initial={avatarImage}
      />
      <Regular style={{ fontSize: 15 }}>ID: {id}</Regular>
      <Regular style={{ fontSize: 15 }}>
        {name ? name : localization.yourName}
      </Regular>
      <Bold style={{ fontSize: 18 }} numberOfLines={1}>
        +{phoneNumber.slice(0, 3)} {phoneNumber.slice(3, 5)}{' '}
        {phoneNumber.slice(5, 8)} {phoneNumber.slice(8, 10)}{' '}
        {phoneNumber.slice(10, 12)}
      </Bold>
    </View>
  );
};

export default UserInfo;
