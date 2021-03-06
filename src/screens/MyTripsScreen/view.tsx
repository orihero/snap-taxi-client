import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import TripItem from '@components/TripItem/TripItem';
import { SemiBold } from '@components/Layout/AppText';
import { localization } from '../../services/Localization';
import { Booking } from '@store/models/booking/types';

interface IProps {
  list: Booking[];
  isLoading: boolean;
}

const MyTripsScreenView = ({ list, isLoading }: IProps) => {
  return (
    <FlatList
      contentContainerStyle={{ zIndex: 9999 }}
      style={styles.container}
      data={list}
      ListEmptyComponent={() =>
        isLoading ? (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
              <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SemiBold style={{ color: '#fff', fontSize: 18 }}>
              {localization.noTrips}
            </SemiBold>
          </View>
        )
      }
      renderItem={({ item }) =>
        item.driver && (
          <TripItem
            car={item.car}
            price={item.price}
            driverName={item.driver.name}
            id={item.id}
            distance={item.distance}
            from={item.routes[0].address}
            to={item.routes[1] ? item.routes[1].address : 'Не указано'}
            date={item.created_at}
            waitingTime={item.waiting_time}
          />
        )
      }
    />
  );
};

export default MyTripsScreenView;
