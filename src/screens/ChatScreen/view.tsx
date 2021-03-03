import React, { useRef, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import SmileIcon from '../../assets/images/SmileIcon';
import SendSMSIcon from '../../assets/images/SendSMSIcon';
import { localization } from '../../services/Localization';
import { Regular } from '@components/Layout/AppText';
import Colors from '@assets/styles/Colors';

interface IProps {
  message: string;
  messages: any[];
  isLoading: boolean;
  sendMsg: () => void;
  setMessage: (message: string) => void;
}

const ChatMessage = ({ item }: any) =>
  item.type === 'driver' ? (
    <View style={{ alignItems: 'flex-start', marginTop: 10, marginBottom: 30 }}>
      <View style={styles.driver}>
        <Regular style={[styles.text, { color: '#4D4F5C' }]}>
          {item.message}
        </Regular>
      </View>
      {/*<Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>*/}
    </View>
  ) : (
    <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
      <View style={styles.client}>
        <Regular style={styles.text}>{item.message}</Regular>
      </View>
      {/*<Regular style={{fontSize: 12, color: '#43425D'}}>10:25</Regular>*/}
    </View>
  );

const ChatScreenView = ({
  messages,
  sendMsg,
  message,
  setMessage,
  isLoading,
}: IProps) => {
  let flatList = useRef<any>(null);

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <FlatList
        ref={flatList}
        onContentSizeChange={() =>
          flatList.current.scrollToEnd({ animated: true })
        }
        style={{ flex: 1, marginTop: 20 }}
        onLayout={() => flatList.current.scrollToEnd({ animated: true })}
        data={messages}
        renderItem={({ item }) => <ChatMessage item={item} />}
      />
      <View style={styles.form}>
        <SmileIcon />
        <TextInput
          onChangeText={setMessage}
          value={message}
          style={{ flex: 1, marginHorizontal: 12 }}
          placeholder={localization.writeSMS}
        />
        <TouchableOpacity disabled={isLoading} onPress={sendMsg}>
          {isLoading ? (
            <ActivityIndicator color={Colors.blue} />
          ) : (
            <SendSMSIcon />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreenView;
