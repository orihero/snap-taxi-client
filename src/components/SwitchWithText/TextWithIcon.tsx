import React from 'react';
import { View } from 'react-native';
import Colors from '../../assets/styles/Colors';
import { Bold, Regular } from '../Layout/AppText';
import Screen from '../../helpers/Dimensions';

const TextWithIcon = ({ active, Icon, children, subText }: any) => (
  <>
    <Icon style={{ marginRight: 20 }} color={active ? Colors.blue : '#000'} />
    <View style={{ width: '70%' }}>
      <Bold
        style={{
          color: active ? Colors.blue : '#000',
          fontSize: Screen.width > 400 ? 15 : 13,
        }}>
        {children}
      </Bold>
      {subText && (
        <Regular
          style={{
            color: active ? Colors.blue : '#000',
            fontSize: 12,
          }}>
          {subText}
        </Regular>
      )}
    </View>
  </>
);

export default TextWithIcon;
