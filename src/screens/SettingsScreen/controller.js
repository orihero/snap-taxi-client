import React, {useState} from 'react';
import {Alert} from "react-native";
import SettingsScreenView from "./view";

const Controller = ({user, navigation, UpdateProfile}) => {

    const profile = user.data;

    const [showTrafficJams, setShowTrafficJams] = useState(false);
    const [acceptCall, setAcceptCall] = useState(profile.canCall);
    const [sale, setSale] = useState(false);
    const [name, setName] = useState(profile.name);
    const [isLoading, setIsLoading] = useState(false);


    const routeTo = (routeName) => () => {
        navigation.navigate(routeName)
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
            save={save}
            routeTo={routeTo}
        />
    );
};

export default Controller;
