import React, {useState} from 'react';
import {Alert} from "react-native";
import {useDispatch} from "react-redux";
import SettingsScreenView from "./view";

const Controller = ({user, navigation, UpdateProfile}) => {
    const dispatch = useDispatch();
    const profile = user.data;

    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(profile.canCall);
    const [sale, setSale] = useState(false);
    const [name, setName] = useState(profile.name);
    const [isLoading, setIsLoading] = useState(false);


    const routeTo = (routeName) => () => {
        navigation.navigate(routeName)
    };

    const logout = () => {
        Alert.alert('Выйти из аккаунта', 'Вы уверены что хотите выйти из аакунта?', [
            {text: 'Отмена'},
            {text: 'Выйти', onPress: () => dispatch({type: 'LOGOUT'})}
        ])
    };

    const save = () => {
        setIsLoading(true);
        UpdateProfile({
            name,
            canCall: acceptCall
        }, () => {
            setIsLoading(false);
            Alert.alert('Успешно', 'Изменение успешно сохранено.')
        }, () => {
            setIsLoading(false);
        })
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
                isLoading
            }}
            logout={logout}
            save={save}
            routeTo={routeTo}
        />
    );
};

export default Controller;
