import React from 'react';
import {FlatList, ActivityIndicator, View} from "react-native"
import styles from "./styles";
import TripItem from "../../components/TripItem/TripItem";


const MyTripsScreenView = ({orderList}) => {
    return (
        <FlatList
            style={styles.container}
            data={orderList}
            ListEmptyComponent={() => (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View>
                        <ActivityIndicator
                            size={"large"}
                            color={'#fff'}
                        />
                    </View>
                </View>
            )}
            renderItem={({item}) => (
                <TripItem
                    car={item.car}
                    driverName={item.driver.name}
                    id={item.id}
                    from={item.routes[0].address}
                    to={item.routes[1] ? item.routes[1].address : 'Не указано'}
                    date={item.created_at}
                />
            )}
        />
    );
};

export default MyTripsScreenView;
