import React, { PureComponent } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import firebase from '@react-native-firebase/messaging';
import Geolocation from 'react-native-geolocation-service';
import MainScreenView from './view';
import api from '../../services/api';
import { debounce } from 'lodash';

class MainScreenController extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mapRef: null,
            currentLocationText: '',
        };
        this.getCurrentLocation();
    }

    componentDidMount() {
        let {
            navigation,
            SetDestination,
            GetNotifications,
            order,
        } = this.props;

        // if (order.id && order.status !== 'new') {
        //   this.props.navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Trip' }],
        //   });
        // }

        GetNotifications();

        const messaging = firebase();

        messaging.setBackgroundMessageHandler(async (msg) => {
            this.notificationHandler(msg.notification);
        });

        messaging.onMessage((msg) => {
            this.notificationHandler(msg.notification);
        });

        navigation.addListener('focus', () => {
            SetDestination();
            this.getCurrentLocation();
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const marker = this.props.marker;
        const prevMarker = prevProps.marker;
        if (
            prevMarker.latitude !== marker.latitude ||
            prevMarker.longitude !== marker.longitude
        ) {
            debounce(this.geocode, 300)();
        }
    }

    notificationHandler = (notification: any) => {
        this.props.GetNotifications();

        if (notification && notification.title === 'Сообщение') {
            this.props.SendPush({
                id: Math.random(),
                message: notification.body,
            });
        }
    };

    geocode = () => {
        const { latitude, longitude } = this.props.marker;
        this.props.GetDriversAround({ latitude, longitude });
        api.request
            .get(
                `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json&ll=69.279737,41.311151&spn=0.3028106689453125,0.14159780811129963`,
            )
            .then((res) => {
                this.props.SetCurrentLocationDetails(res.data.response);
                this.setState({
                    currentLocationText:
                        res.data.response.GeoObjectCollection.featureMember[0]
                            .GeoObject.name,
                });
            })
            .catch((err) => {});
    };

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (data) => {
                this.props.GetCurrentLocation(data.coords);
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    setMapRef = (mapRef) => {
        this.setState({
            mapRef,
        });
    };

    render() {
        let { navigation, drivers } = this.props;

        return (
            <MainScreenView
                drivers={drivers}
                currentLocationText={this.state.currentLocationText}
                navigation={navigation}
                setMapRef={this.setMapRef}
                mapRef={this.state.mapRef}
            />
        );
    }
}

export default MainScreenController;
