import React from 'react';
import CancelBookingPanelView from './view';
import { Props } from './connect';

const CancelBookingController = ({
  cancel,
  isLoading,
  destinationInfo,
  currentLocationInfo,
}: Props) => {
  return (
    <CancelBookingPanelView
      to={destinationInfo?.name as string}
      from={currentLocationInfo?.name as string}
      isLoading={isLoading}
      cancelBooking={cancel}
    />
  );
};

export default CancelBookingController;
