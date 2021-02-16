import React, { useState, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import MapScreenView from './view';
import api from '../../services/api';
import { isPointInPolygon } from 'geolib';
import reactotron from 'reactotron-react-native';

const MapScreenController = ({
  SetRegionId,
  SetMarkerPosition,
  SetDestinationDetails,
  mapStyles,
  map,
  showMarker = true,
  setMapRef,
  mapRef,
  children,
  drivers = [],
  circle = true,
  zoom,
  markerPosition = false,
  order,
  SetGoogleMarkerPosition,
  SetDestination,
  isDestSelecting,
  regions,
}) => {
  const [mapZoom, setMapZoom] = useState(
    zoom
      ? zoom
      : {
          latitudeDelta: 0.005,
          longitudeDelta: 0.001,
        },
  );

  const [isBlinking, setIsBlinking] = useState(true);
  const [driverMarkerRef, setDriverMarkerRef] = useState(null);
  const [mapHeight, setMapHeight] = useState(0);
  const [minutes, setMinutes] = useState(2);
  const [timeoutId, setTimeoutId] = useState(null);
  const [driverLocation, setDriverLocation] = useState({});
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
    blink();
  }, []);

  useEffect(() => {
    if (!isBlinking) {
      setIsBlinking(true);
      setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
      blink();
    }
  }, [map.marker]);

  useEffect(() => {
    if (
      order.data.status &&
      order.data.status !== 'new' &&
      order.data.status !== 'canceled'
    ) {
      const id = setInterval(() => {
        api.request
          .get(`/car-booking/location/${order.data.id}`)
          .then((res) => {
            const { lat, lng } = res.data;
            if (lat && lng) {
              setDriverLocation({
                latitude: +lat,
                longitude: +lng,
              });
            }
          });
      }, 10000);
      return () => clearInterval(id);
    }
  }, [order.data.status]);

  const onRegionChange = (region) => {
    const { latitude, longitude } = region;
    for (let i = 0; i < regions.length; i++) {
      if (!!regions[i].polygon[0]) {
        let result = isPointInPolygon(
          { latitude, longitude },
          regions[i].polygon[0],
        );
        if (result) {
          SetRegionId(regions[i].id);
          break;
        }
      }
    }

    if (!map.destination.details && !isDestSelecting) {
      SetMarkerPosition(region);
    } else if (isDestSelecting) {
      geocode(region);
    }
  };

  const geocode = (region) => {
    const { longitude, latitude } = region;
    api.request
      .get(
        `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json`,
      )
      .then((res) => {
        const obj =
          res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
        SetDestination({
          data: {
            name: obj.name,
          },
          coords: {
            latitude,
            longitude,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const blink = () => {
    opacity.setValue(1);
    clearTimeout(timeoutId);
    setTimeoutId(() => setTimeout(() => setIsBlinking(false), 2000));
    if (isBlinking) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => blink());
    }
  };

  return (
    <MapScreenView
      setDriverMarkerRef={setDriverMarkerRef}
      isDestSelecting={isDestSelecting}
      opacity={opacity}
      children={children}
      minutes={minutes}
      onRegionChange={onRegionChange}
      mapHeight={mapHeight}
      setMapHeight={setMapHeight}
      map={map}
      drivers={drivers}
      setMapRef={setMapRef}
      mapRef={mapRef}
      driverLocation={driverLocation}
      showMarker={showMarker}
      mapStyles={mapStyles}
      SetDestinationDetails={SetDestinationDetails}
      circle={circle && isBlinking}
      SetGoogleMarkerPosition={SetGoogleMarkerPosition}
      order={order.data}
      routes={order.data.driver ? order.data.routes[0] : null}
      initialRegion={{
        ...(markerPosition ? map.marker : map.currentLocation.coords),
        ...(isDestSelecting ? map.destination.coords : {}),
        ...mapZoom,
      }}
    />
  );
};

export default MapScreenController;
