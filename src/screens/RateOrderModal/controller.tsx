import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import RateOrderModalView from './view';
import { Props } from './connect';

const RateOrderModalController = ({ reviewBooking, currentBooking }: Props) => {
  const navigation = useNavigation();

  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(5);

  const rateBooking = () => {
    reviewBooking({
      payload: {
        comment,
        rating: rate,
      },
      successCb: () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainStack' }],
        });
      },
    });
  };

  return (
    <RateOrderModalView
      currentBooking={currentBooking}
      comment={comment}
      setComment={setComment}
      rateBooking={rateBooking}
      rate={rate}
      setRate={setRate}
    />
  );
};

export default RateOrderModalController;
