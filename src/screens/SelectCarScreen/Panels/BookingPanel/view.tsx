import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from '../../styles';
import CarItem from '@components/CarItem';
import WalletIcon from '@assets/images/WalletIcon';
import { Bold, Regular, SemiBold } from '@components/Layout/AppText';
import ArrowIcon from '@assets/images/ArrowIcon';
import TouchablePlatformSpecific from '@components/TouchablePlatformSpecific';
import AddIcon from '@assets/images/AddIcon';
import Button from '@components/Button';
import { localization } from '../../../../services/Localization';
import { Address, Rate } from '@store/models/user/types';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import CancelTripIcon from '@assets/images/CancelTripIcon';
import CancelIcon from '@assets/images/CancelIcon';
import Screen from '../../../../helpers/Dimensions';
import Colors from '@assets/styles/Colors';
import { Booking } from '@store/models/booking/types';

interface IProps {
  rates: Rate[];
  from: string;
  to: string;
  isLoading: boolean;
  bookingList: Address[];
  isRatesLoading: boolean;
  findCar: () => void;
  selectedRateIndex: number;
  cancelDestination: () => void;
  selectDest: any;
  openAdditionalModal: () => void;
  openDestinationModal: () => void;
  setSelectedRateIndex: (index: number) => void;
  setVisiblePlanModal: (visible: boolean) => void;
}

const BookingPanelView = ({
  to,
  from,
  rates,
  findCar,
  isLoading,
  isRatesLoading,
  bookingList,
  selectDest,
  cancelDestination,
  selectedRateIndex,
  setVisiblePlanModal,
  openAdditionalModal,
  openDestinationModal,
  setSelectedRateIndex,
}: IProps) => {
  return (
    <View style={styles.container}>
      <>
        <FlatList
          // @ts-ignore
          ListEmptyComponent={() => {
            return [...new Array(6)].map((item, index) => (
              <CarItem key={index} />
            ));
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.plan}
          style={{ width: '100%' }}
          horizontal
          decelerationRate={10}
          snapToInterval={186}
          data={rates}
          renderItem={({ item, index }) => {
            const isActive = selectedRateIndex === index;
            return (
              <CarItem
                isLoading={!isRatesLoading}
                inflated={item.inflated}
                title={item.title}
                key={index}
                image={item.icon}
                price={item?.price}
                onPress={() => {
                  isActive && setVisiblePlanModal(true);
                  setSelectedRateIndex(index);
                }}
                active={isActive}
              />
            );
          }}
          snapToAlignment={'start'}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.optionsWrapper}>
          <View style={styles.column}>
            <View style={styles.findCar}>
              <WalletIcon style={{ marginRight: 16.6, top: -3 }} />
              <Regular style={styles.text}>{localization.byCash}</Regular>
              <ArrowIcon style={{ marginLeft: 'auto' }} />
            </View>
          </View>
          <TouchablePlatformSpecific
            style={styles.column}
            onPress={openAdditionalModal}>
            <View style={styles.additional}>
              <Bold style={styles.text}>{localization.additional}</Bold>
              <AddIcon color={'#575f6b'} />
            </View>
          </TouchablePlatformSpecific>
        </View>
      </>
      <View style={styles.selectDest}>
        <View style={{ marginLeft: 5, flex: 1 }}>
          <TouchableOpacity
            onPress={openDestinationModal}
            style={[
              styles.row,
              { borderBottomWidth: 1, borderBottomColor: Colors.border },
            ]}>
            <View style={[styles.addressCircle]} />
            {from ? (
              <Bold style={styles.directionText}>{from}</Bold>
            ) : (
              <Placeholder Animation={Fade} style={{ width: 200, height: 12 }}>
                <PlaceholderLine />
              </Placeholder>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={!to ? openDestinationModal : () => {}}
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              },
              styles.row,
              styles.scrollView,
            ]}>
            <View
              style={[
                styles.row,
                !to && { flex: 1, position: 'absolute' },
                { paddingVertical: 0 },
              ]}>
              <View style={[styles.addressCircle, styles.redColor]} />
              <Bold style={styles.directionText}>{to ?? 'Куда едем ?'}</Bold>
            </View>
            {to && (
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={cancelDestination}>
                <CancelIcon />
              </TouchableOpacity>
            )}
            {!to && (
              <ScrollView
                style={{
                  flex: 1,
                }}
                contentContainerStyle={{
                  paddingLeft: '50%',
                }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {bookingList.map((item) => (
                  <TouchableOpacity
                    onPress={() => {
                      selectDest({
                        coords: {
                          latitude: +item.lat,
                          longitude: +item.lng,
                        },
                        name: item.address,
                        Point: {
                          pos: '',
                        },
                      });
                    }}
                    activeOpacity={0.9}
                    style={styles.recentBtn}>
                    <View style={styles.recent}>
                      <SemiBold>{item.title ?? item.address}</SemiBold>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          isLoading={isLoading}
          title={localization.findTaxi}
          onPress={findCar}
        />
      </View>
    </View>
  );
};

export default BookingPanelView;
