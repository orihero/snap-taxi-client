import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import SmileIcon from '@assets/images/SmileIcon';
import SendSMSIcon from '@assets/images/SendSMSIcon';
import { localization } from '../../services/Localization';
import { Regular } from '@components/Layout/AppText';
import { request } from '@store/models/utils/request';
import { formData } from '../../helpers';

const ChatMessage = ({ item }) =>
  item.type === 'driver' || item.user === null ? (
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

const SupportChatScreen = ({}) => {
  let flatList = useRef(null);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    request.get('/admin-messages').then((res) => {
      setMessages(res.data.data);
    });
  }, []);

  const sendMessage = () => {
    if (message) {
      request.post('/admin-messages', formData({ message })).then((res) => {
        setMessages((prevState) => [...prevState, res.data.data]);
        setMessage('');
      });
    }
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <FlatList
        ref={flatList}
        onContentSizeChange={() =>
          flatList.current.scrollToEnd({ animated: true })
        }
        onLayout={() => flatList.current.scrollToEnd({ animated: true })}
        contentContainerStyle={styles.chatArea}
        data={messages.reverse()}
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
        <TouchableOpacity onPress={sendMessage}>
          <SendSMSIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SupportChatScreen;
