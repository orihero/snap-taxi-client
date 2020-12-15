import React, { PureComponent } from 'react';
import { PermissionsAndroid, AppState, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import firebase from '@react-native-firebase/messaging';
import Geolocation from '@react-native-community/geolocation';
import MainScreenView from './view';
import api from '../../services/api';

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
    let { navigation, SetDestination, GetNotifications } = this.props;
    AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        this.establishProcess();
      } else if (state === 'background') {
      }
    });

    if (Platform.OS === 'android') {
      // noinspection JSIgnoredPromiseFromCall
      this.requestPermission();
    }

    NetInfo.addEventListener((state) => {
      this.establishProcess();
    });

    GetNotifications();

    const messaging = firebase();

    messaging.setBackgroundMessageHandler(async (msg) => {
      this.notificationHandler(msg.notification);
    });
    messaging.onMessage((msg) => {
      this.notificationHandler(msg.notification);
    });

    AppState.removeAllListeners('change');

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
      this.geocode();
    }
  }

  notificationHandler = (notification: any) => {
    this.props.GetNotifications();

    // if (notification.title === 'Сообщение') {
    //     SendPush({
    //         id: Math.random(),
    //         message: notification.body,
    //     });
    // }
  };

  establishProcess = () => {
    const order = this.props.order;
    if (order.id && order.status !== 'canceled') {
      this.props.GetOrderInfo(order.id, () => {
        return {
          cb: (data) => {
            this.props.ChangeOrderStatus(data);
          },
          actionCb: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Trip' }],
            });
          },
          socketCb: (data) => {
            this.props.ChangeOrderStatus(data);
          },
        };
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
            res.data.response.GeoObjectCollection.featureMember[0].GeoObject
              .name,
        });
      })
      .catch((err) => {});
  };

  requestPermission = async () => {
    let hasPermission;
    if (Platform.OS === 'android') {
      hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (!hasPermission) {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    }
  };

  getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (data) => {
        this.props.GetCurrentLocation(data.coords);
      },
      (error) => {
        this.getCurrentLocation();
      },
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
