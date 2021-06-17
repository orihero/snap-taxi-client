import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../utils/request';
import { API } from '@constants/API';
import {
  Coords,
  DestinationInfo,
  DriverLocation,
  Drivers,
  Region,
} from './types';
import { initialState } from './state';
import { EffectPayload } from '@store/models/types';
import { GeoCoordinates } from 'react-native-geolocation-service';
import { Region as MapRegion } from 'react-native-maps';
import { normalizeCoords } from '../../../helpers';

export const map = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setRegionId(state, regionId: number | string) {
      return { ...state, regionId };
    },
    setCurrentLocationInfo(state, currentLocationInfo: DestinationInfo) {
      if (currentLocationInfo) {
        return {
          ...state,
          currentLocationInfo: {
            ...currentLocationInfo,
            coords: normalizeCoords(currentLocationInfo.Point.pos),
          },
        };
      }
      return { ...state, currentLocationInfo };
    },
    setDestinationInfo(state, destinationInfo: DestinationInfo | null) {
      return { ...state, destinationInfo };
    },
    setDistance(state, distance: number) {
      return { ...state, distance };
    },
    setMarkerInfo(state, markerInfo: DestinationInfo | null) {
      return { ...state, markerInfo: markerInfo };
    },
    setDriversAround(state, driversAround: Drivers[]) {
      return { ...state, driversAround };
    },
    setIsSelectingOnMap(state, isSelectingOnMap: boolean) {
      return { ...state, isSelectingOnMap };
    },
    setRegions(state, regions: Region[]) {
      return { ...state, regions };
    },
    setDriverLocation(state, driverLocation: DriverLocation | null) {
      return { ...state, driverLocation };
    },
  },
  effects: (dispatch) => ({
    async getDriversAround(payload, state) {
      try {
        const {
          user: { currentLocation },
        } = state;
        const { data } = await request.get(
          API.GET_DRIVERS_AROUND +
            `?lat=${currentLocation?.latitude}&lng=${currentLocation?.longitude}`,
        );
        dispatch.map.setDriversAround(data);
      } catch (e) {
        console.log(e);
      }
    },
    async getRegions() {
      try {
        const { data } = await request.get(API.GET_REGIONS);
        dispatch.map.setRegions(data.data);
      } catch (e) {
        console.log(e);
      }
    },
    async getDriverLocation(payload, state) {
      try {
        const {
          booking: { current },
        } = state;
        const { data } = await request.get(
          API.GET_DRIVER_LOCATION + current?.id,
        );
        dispatch.map.setDriverLocation(data);
      } catch (e) {
        console.log(e);
      }
    },
    async getLocationData({
      payload,
      errorCb,
      successCb,
    }: EffectPayload<Coords, any>) {
      try {
        const { latitude, longitude } = payload;
        await request
          .get(
            `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json`,
          )
          .then((res) => {
            const obj =
              res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
            successCb?.(obj);
          });
      } catch (e) {
        errorCb?.();
        console.log(e);
      }
    },
    async getFullCurrentLocation(payload: MapRegion | GeoCoordinates) {
      try {
        dispatch.user.setCurrentLocation(payload);
        dispatch.map.getDriversAround();
        dispatch.map.getLocationData({
          payload,
          successCb: (data) => dispatch.map.setCurrentLocationInfo(data),
        });
      } catch (e) {
        console.log(e);
      }
    },
    async searchLocation({
      payload,
      successCb,
      errorCb,
    }: EffectPayload<any, any>) {
      try {
        const { data } = await request.get(
          `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${payload}&format=json&ll=69.279737,41.311151&rspn=1&spn=0.3028106689453125,0.14159780811129963`,
        );
        successCb?.(data.response.GeoObjectCollection.featureMember);
      } catch (e) {
        errorCb?.();
        console.log(e);
      }
    },
  }),
});
