import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';
import StarIcon from '../../assets/images/StarIcon';
import Button from '@components/Button';
import { localization } from '../../services/Localization';
import { Bold, SemiBold } from '@components/Layout/AppText';
import ArrowIcon from '../../assets/images/ArrowIcon';
import { Booking } from '@store/models/booking/types';
import OrderStatus from '@constants/orderStatus';

interface IProps {
  comment: string;
  setComment: (comment: number) => void;
  currentBooking: Booking | null;
  rateBooking: () => void;
  rate: number;
  setRate: (rate: number) => void;
}

const RateOrderModalView = ({
  currentBooking,
  rateBooking,
  rate,
  setRate,
  comment,
  setComment,
}: IProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const Rate = () => (
    <View style={styles.startContainer}>
      {[...new Array(5)].map((item, index) => (
        <TouchableWithoutFeedback onPress={() => setRate(index + 1)}>
          <StarIcon
            active={index < rate}
            style={{ marginRight: 10 }}
            width={35.26}
            height={33.79}
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );

  return (
    <Modal transparent visible={currentBooking?.status === OrderStatus.DONE}>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
            <View>
              <View style={styles.shadow}>
                <View style={styles.content}>
                  <View style={styles.topText}>
                    <Text style={styles.heading}>
                      {localization.howWasTrip}
                    </Text>
                    <Text style={styles.subHeading}>
                      {localization.helpUsToBeBetter}
                    </Text>
                  </View>
                  <Rate />
                  <View style={styles.markWrapper}>
                    <Bold style={{ fontSize: 16 }}>
                      {localization.yourMark}
                    </Bold>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginRight: 4,
                        }}>
                        {rate}
                      </Text>
                      <StarIcon active width={17.19} height={16.48} />
                    </View>
                  </View>
                  <View style={styles.textarea}>
                    <TextInput
                      value={comment}
                      onChangeText={(text) => setComment(text)}
                      multiline={true}
                      placeholder={localization.leaveFeedBack}
                    />
                  </View>
                  <View style={styles.price}>
                    <SemiBold style={styles.priceHeading}>
                      Сумма поездки
                    </SemiBold>
                    <Bold style={styles.priceText}>
                      {Math.floor(currentBooking!.price / 100) * 100}
                      сум
                    </Bold>
                  </View>
                  <TouchableOpacity
                    onPress={() => setIsCollapsed(!isCollapsed)}
                    style={styles.collapsable}>
                    <SemiBold>Подробнее</SemiBold>
                    <View
                      style={{
                        transform: [
                          { rotate: isCollapsed ? '90deg' : '-90deg' },
                        ],
                      }}>
                      <ArrowIcon />
                    </View>
                  </TouchableOpacity>
                  {!isCollapsed && (
                    <View style={styles.detailsWrapper}>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          {localization.tripTime} ожидание
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {Math.floor(
                            (currentBooking?.waiting_time as number) / 60,
                          )}{' '}
                          мин
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          Цена за ожидание
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {Math.floor(
                            (currentBooking?.waiting_time as number) / 60,
                          ) *
                            (currentBooking?.rate
                              ?.price_per_min as number)}{' '}
                          сум
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          {localization.tripCost}
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {currentBooking?.price} сум
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          {localization.tripDistance}
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {currentBooking?.distance} км
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>Пробег</Text>
                        <Bold style={{ fontSize: 17 }}>
                          {currentBooking?.rate?.price_per_km} сум
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          {localization.rateTitle}
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {currentBooking?.rate?.title}
                        </Bold>
                      </View>
                      <View style={styles.row}>
                        <Text style={{ color: '#646974' }}>
                          Минимальная цена
                        </Text>
                        <Bold style={{ fontSize: 17 }}>
                          {currentBooking?.rate?.min_price} сум
                        </Bold>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <Button
          title={localization.done}
          onPress={rateBooking}
          containerStyle={{
            marginBottom: 20,
          }}
        />
      </View>
    </Modal>
  );
};

export default RateOrderModalView;
