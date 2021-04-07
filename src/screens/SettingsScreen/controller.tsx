import React, {useState} from 'react';
import {Alert} from 'react-native';
import SettingsScreenView from './view';
import {Props} from './connect';

const Controller = ({logout, profile, navigation, updateProfile, isLoading}: Props) => {
    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(profile?.canCall);
    const [sale, setSale] = useState(false);
    const [name, setName] = useState(profile?.name);

    const routeTo = (routeName: string) => () => {
        navigation.navigate(routeName);
    };

    const logoutHandler = () => {
        Alert.alert(
            'Выйти из аккаунта',
            'Вы уверены что хотите выйти из аакунта?',
            [{text: 'Отмена'}, {text: 'Выйти', onPress: logout}],
        );
    };
    const save = () => {
        updateProfile({
            payload: {
                name,
                canCall: acceptCall,
            },
            successCb: () => {
                Alert.alert('Успешно', 'Изменение успешно сохранено.');
            }
        });
    };

    return (
        <SettingsScreenView
            setters={{
                setShowTrafficJams,
                setAcceptCall,
                setSale,
                setName,
            }}
            values={{
                showTrafficJams,
                acceptCall,
                sale,
                name,
                isLoading,
            }}
            logout={logoutHandler}
            save={save}
            routeTo={routeTo}
        />
    );
};

export default Controller;
