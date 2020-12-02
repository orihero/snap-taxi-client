import React from 'react';
import {View, FlatList} from 'react-native'

import styles from "./styles";
import {Bold, Regular, SemiBold} from "../../components/Layout/AppText";
import Colors from "../../assets/styles/Colors";

const NotificationsScreenView = ({notifications}) => {
    return (
        <FlatList
            style={{flex: 1}}
            contentContainerStyle={{paddingTop: 30}}
            data={notifications}
            ListEmptyComponent={
                <View style={styles.container}>
                    <SemiBold style={{color: Colors.grey}}>Увас пока нет уведомлений</SemiBold>
                </View>
            }
            renderItem={({item}) => (
                <View style={styles.messageItem}>
                    <Bold style={styles.messageText}>{item.title}</Bold>
                    <Regular style={styles.messageTitle}>{item.message}</Regular>
                    <Regular style={{textAlign: 'right', fontSize: 10}}>{item.created_at}</Regular>
                </View>
            )}
        />

    );
};


export default NotificationsScreenView;
