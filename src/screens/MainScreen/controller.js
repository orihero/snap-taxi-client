import React, {useState, useEffect} from 'react';
import {Alert, PermissionsAndroid} from "react-native";

import MainScreenView from "./view";
import SystemSetting from "react-native-system-setting";

const MainScreenController = ({navigation}) => {
    const [isLocationEnabled, setIsLocationEnabled] = useState(true);

    const requestPermission = async () => {
        let hasPermission;
        if (Platform.OS === 'android') {
            hasPermission = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (!hasPermission) {
                const status = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            }
        }
    };

    useEffect(() => {
        SystemSetting
            .isLocationEnabled()
            .then((enable) => {
                setIsLocationEnabled(enable)
            });

        requestPermission()
            .then(r => {
            })
            .catch(e => console.warn(e))
    }, []);

    useEffect(() => {
        if (!isLocationEnabled) {
            Alert.alert('Ошибка', 'Чтобы продолжить, включите на устройстве геолокацию Google.', [
                {
                    text: 'OK', onPress: () => SystemSetting
                        .switchLocation(() => {
                            console.log('good job')
                        })
                }
            ])
        }
    }, [isLocationEnabled]);

    const [isSearchActive, setSearchActive] = useState(false);

    return (
        <MainScreenView
            navigation={navigation}
            isSearchActive={isSearchActive}
            setSearchActive={setSearchActive}
        />
    );
};

export default MainScreenController;
