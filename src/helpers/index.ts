import SmsRetriever from 'react-native-sms-retriever';
import { PermissionsAndroid, Platform } from 'react-native';
// @ts-ignore
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const onSmsListener = async (setCode: (code: string) => void) => {
  try {
    const registered = await SmsRetriever.startSmsRetriever();
    if (registered) {
      await SmsRetriever.addSmsListener((event) => {
        if (event.message) {
          setCode(event.message.split(':')[1].slice(1, 6));
          return SmsRetriever.removeSmsListener();
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestPermission = async (cb?: () => void) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      cb?.();
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const turnOnLocation = () => {
  RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    interval: 10000,
    fastInterval: 5000,
  })
    .then((data: any) => {})
    .catch((err: any) => {});
};

export const isRegionChanged = (region, currentLocation) => {
  return (
    region.latitude.toFixed(6) === currentLocation.latitude.toFixed(6) &&
    region.longitude.toFixed(6) === currentLocation.longitude.toFixed(6)
  );
};

export const normalizeCoords = (points: string) => {
  const normalized = points.split(' ');
  return {
    latitude: +normalized[1],
    longitude: +normalized[0],
  };
};

export let formData = (rawData: any) => {
  let form = new FormData();
  Object.keys(rawData).forEach((key) => {
    form.append(key, rawData[key]);
  });
  return form;
};
