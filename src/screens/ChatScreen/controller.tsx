import React, { useEffect, useState } from 'react';
import ChatScreenView from './view';
import { Props } from './connect';

const ChatScreenController = ({
  chat,
  sendPush,
  markRead,
  isLoading,
  setChatMessage,
}: Props) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    markRead();
  }, [chat.length]);

  const sendMsg = () => {
    if (message) {
      const payload = {
        title: 'Сообщение',
        type: 'user',
        message,
      };
      sendPush({
        payload,
        successCb: () => {
          setChatMessage({ ...payload, read: true });
          setMessage('');
        },
      });
    }
  };

  return (
    <ChatScreenView
      messages={chat}
      isLoading={isLoading}
      sendMsg={sendMsg}
      message={message}
      setMessage={setMessage}
    />
  );
};

export default ChatScreenController;
