import React from 'react';
import SelectLocationPanelView from './view';
import { Props } from './connect';

const SelectLocationPanelController = ({
  isLoading,
  markerInfo,
  setIsSelectingOnMap,
  setDestinationInfo,
}: Props) => {
  const finish = () => {
    setDestinationInfo(markerInfo);
    setIsSelectingOnMap(false);
  };

  return (
    <SelectLocationPanelView
      finish={finish}
      isLoading={isLoading}
      markerInfo={markerInfo}
    />
  );
};

export default SelectLocationPanelController;
