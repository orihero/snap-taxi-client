import React, {useState, useEffect} from 'react';
import {Alert, PermissionsAndroid} from "react-native";

import MainScreenView from "./view";
import SystemSetting from "react-native-system-setting";
import Geolocation from "@react-native-community/geolocation";

const MainScreenController = ({navigation, GetCurrentLocation, SetDestination}) => {

    useEffect(() => {
        navigation.addListener('focus', () => {
            SetDestination();
        });

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();

        checkGPSStatus();

    }, []);

    const checkGPSStatus = () => {
        SystemSetting
            .isLocationEnabled()
            .then((enable) => {
                if (!enable) {
                    errorHandler()
                } else {
                    getCurrentLocation()
                }
            });
    };

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((data) => {
            GetCurrentLocation(data.coords);
        }, error => {
            getCurrentLocation()
        })
    };

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

    const errorHandler = () => {
        Alert.alert('Ошибка', 'Чтобы продолжить, включите на устройстве геолокацию Google.', [
            {
                text: 'OK', onPress: () => SystemSetting
                    .switchLocation(() => {
                    })
            }
        ])
    };


    const [isSearchActive, setSearchActive] = useState(false);

    return (
        <MainScreenView
            navigation={navigation}
            isSearchActive={isSearchActive}
            setSearchActive={setSearchActive}
            getCurrentLocation={getCurrentLocation}
        />
    );
};

export default MainScreenController;
