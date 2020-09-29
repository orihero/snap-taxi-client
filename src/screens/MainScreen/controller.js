import React, {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid} from "react-native";
import Geocode from "react-geocode";
import SystemSetting from "react-native-system-setting";

const PushNotification = require("react-native-push-notification");

import MainScreenView from "./view";
import API_KEY from "../../const/apiKey";
import Geolocation from "@react-native-community/geolocation";

const MainScreenController = ({navigation, SetDestination, SetCurrentLocationDetails, GetCurrentLocation, SendPush, marker}) => {

    const [mapRef, setMapRef] = useState();
    const [currentLocationText, setCurrentLocationText] = useState('Куда мы едем?');

    const {latitude, longitude} = marker;

    useEffect(() => {
        navigation.addListener('focus', () => {
            SetDestination();
        });

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();

        PushNotification.configure({
            onNotification: (notification: any) => {

                if (notification.title === "message") {
                    SendPush({
                        id: notification.data.notification_id,
                        message: notification.message,
                        type: 'driver',
                    })
                }
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }, []);

    useEffect(() => {
        geocode();
    }, [marker]);

    useEffect(() => {
        if (mapRef) {
            getCurrentLocation()
        }
    }, [mapRef]);

    const geocode = () => {
        Geocode.setApiKey(API_KEY);
        Geocode.setLanguage('uz');
        Geocode.fromLatLng(latitude, longitude)
            .then(response => {
                SetCurrentLocationDetails(response);
                setCurrentLocationText(
                    response.results[0].address_components[1].long_name
                )
            });
    };


    const checkGPSStatus = () => {
        SystemSetting
            .isLocationEnabled()
            .then((enable) => {
                if (!enable) {
                    errorHandler()
                }
            });
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

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((data) => {
            GetCurrentLocation(data.coords);
            mapRef.animateToRegion({
                ...data.coords,
                latitudeDelta: 0.005,
                longitudeDelta: 0.001,
            });
        }, error => {
            getCurrentLocation()
        });
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


    return (
        <MainScreenView
            currentLocationText={currentLocationText}
            navigation={navigation}
            setMapRef={setMapRef}
            mapRef={mapRef}
        />
    );
};

export default MainScreenController;
