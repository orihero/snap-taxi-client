import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { localization } from '../../services/Localization';

const AddCard = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{localization.newCard}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddCard;
