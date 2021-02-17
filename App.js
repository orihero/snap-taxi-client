import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, SafeAreaView } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AppNavigator from './src/navigation/AppNavigator';
import api from './src/services/api';
import Geolocation from 'react-native-geolocation-service';
import { bindActionCreators } from 'redux';
import { GetCurrentLocation } from './src/store/constants/map';
import { connect } from 'react-redux';

const requestPermission = async () => {
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

const App = ({ store, GetCurrentLocation }) => {
  useEffect(() => {
    api.setToken(store);
    if (Platform.OS === 'android') {
      requestPermission().then(() => {
        setTimeout(() => {
          Geolocation.getCurrentPosition(
            (data) => {
              GetCurrentLocation(data.coords);
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        }, 0);
      });

      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      })
        .then((data) => {})
        .catch((err) => {});
    } else {
      Geolocation.requestAuthorization('always').then((res) => {
        console.log(res);
      });
    }

	Geolocation.getCurrentPosition(
		(data) => {
		  GetCurrentLocation(data.coords);
		},
		(error) => {
		  console.log(error.code, error.message);
		},
		{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
	  );

  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
};


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      GetCurrentLocation: (payload) => ({
        type: GetCurrentLocation.SUCCESS,
        payload,
      }),
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(App);
