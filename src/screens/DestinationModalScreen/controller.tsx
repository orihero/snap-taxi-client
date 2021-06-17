import React, { useState } from 'react';
import DestinationModalScreenView from './view';
import { Props } from './connect';
import debounce from 'lodash/debounce';
import { normalizeCoords } from '../../helpers';
import { Region } from 'react-native-maps';

const DestinationModalScreenController = ({
  mapRef,
  visible,
  closeModal,
  searchLocation,
  destinationInfo,
  setDestinationInfo,
  setCurrentLocation,
  currentLocationInfo,
  setIsSelectingOnMap,
  setCurrentLocationInfo,
}: Props) => {
  const [originLocationText, setOriginLocationText] = useState<string>(
    currentLocationInfo?.name ?? '',
  );
  const [originResults, setOriginResults] = useState([]);
  const [destinationText, setDestinationLocationText] = useState<string>(
    destinationInfo?.name ?? '',
  );
  const [destinationResults, setDestinationResults] = useState([]);

  const searchDestination = (text: string) => {
    setDestinationLocationText(text);
    if (destinationText.length > 3) {
      debounce(
        () =>
          searchLocation({
            payload: text,
            successCb: setDestinationResults,
          }),
        1000,
      )();
    }
  };

  const searchOrigin = (text: string) => {
    setOriginLocationText(text);
    if (originLocationText.length > 3) {
      return debounce(
        () =>
          searchLocation({
            payload: text,
            successCb: setOriginResults,
          }),
        1000,
      )();
    }
  };

  const selectOnMap = () => {
    setIsSelectingOnMap(true);
    closeModal();
  };
  const onAddressSelect = (item: any, isDestination: boolean) => {
    if (isDestination) {
      setDestinationInfo({
        ...item.GeoObject,
        coords: normalizeCoords(item.GeoObject.Point.pos),
      });
    } else {
      const coords = normalizeCoords(item.GeoObject.Point.pos);
      mapRef?.animateToRegion({
        ...coords,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
      });
      setCurrentLocationInfo({
        ...item.GeoObject,
        coords,
      });
      setCurrentLocation(coords as Region);
    }
    closeModal();
  };

  return (
    <DestinationModalScreenView
      visible={visible}
      closeModal={closeModal}
      selectOnMap={selectOnMap}
      searchOrigin={searchOrigin}
      originResults={originResults}
      destinationText={destinationText}
      onAddressSelect={onAddressSelect}
      searchDestination={searchDestination}
      originLocationText={originLocationText}
      destinationResults={destinationResults}
    />
  );
};

export default DestinationModalScreenController;
