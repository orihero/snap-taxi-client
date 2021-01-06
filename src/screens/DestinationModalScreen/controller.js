import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import DestinationModalScreenView from './view';
import debounce from 'lodash/debounce';

const DestinationModalScreenController = ({
  visible,
  GetOrderList,
  setIsDestSelecting,
  SetDestination,
  SetMarkerPosition,
  bookings,
  closeModal,
  from,
  to,
}) => {
  const [text, setText] = useState(to);
  const [origin, setOrigin] = useState(from);
  const [result, setResult] = useState({});
  const [originResult, setOriginResult] = useState({});

  useEffect(() => {
    GetOrderList({});
  }, []);

  const searchDestination = () => {
    if (text.length > 2) {
      debounce(() => {
        api.request
          .get(
            `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${text}&format=json&ll=69.279737,41.311151&spn=0.3028106689453125,0.14159780811129963`,
          )
          .then((res) => {
            setResult(res.data.response.GeoObjectCollection.featureMember);
          })
          .catch((err) => {});
      }, 400)();
    }
  };

  const searchOrigin = () => {
    if (origin.length > 2) {
      debounce(() => {
        api.request
          .get(
            `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${origin}&format=json&ll=69.279737,41.311151&spn=0.3028106689453125,0.14159780811129963`,
          )
          .then((res) => {
            setOriginResult(
              res.data.response.GeoObjectCollection.featureMember,
            );
          })
          .catch((err) => {});
      }, 400)();
    }
  };

  const onAddressSelect = (item, isOrigin = false, recent = false) => {
    if (recent && isOrigin) {
      closeModal();
      return SetMarkerPosition({
        longitude: +item.routes[1].lng,
        latitude: +item.routes[1].lat,
      });
    } else if (recent) {
      closeModal();
      return SetDestination({
        data: {
          name: item.routes[1].address,
        },
        coords: {
          longitude: +item.routes[0].lng,
          latitude: +item.routes[0].lat,
        },
      });
    }

    if (isOrigin) {
      const point = item.GeoObject.Point.pos.split(' ');
      SetMarkerPosition({
        longitude: parseFloat(point[0]),
        latitude: parseFloat(point[1]),
      });
    } else {
      const point = item.GeoObject.Point.pos.split(' ');
      SetDestination({
        data: {
          name: item.GeoObject.name,
        },
        coords: {
          longitude: parseFloat(point[0]),
          latitude: parseFloat(point[1]),
        },
      });
    }
    closeModal();
  };

  return (
    <DestinationModalScreenView
      setIsDestSelecting={setIsDestSelecting}
      visible={visible}
      closeModal={closeModal}
      to={to}
      bookings={bookings}
      origin={origin}
      setOrigin={setOrigin}
      text={text}
      setText={setText}
      result={result}
      searchDestination={searchDestination}
      searchOrigin={searchOrigin}
      onAddressSelect={onAddressSelect}
      originResult={originResult}
    />
  );
};

export default DestinationModalScreenController;
