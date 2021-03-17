import React, { useEffect, useState } from 'react';
import BookingPanelView from './view';
import { Props } from './connect';
import PlanItemInfoModal from '@components/PlanItemInfoModal';
import AdditionalOptionsModal from '@components/AdditionalOptionsModal';
import DestinationModal from '../../../DestinationModalScreen';

const BookingPanelController = ({
  rates,
  bookCar,
  getRates,
  distance,
  regionId,
  isLoading,
  destinationInfo,
  cancelDestination,
  currentLocationInfo,
}: Props) => {
  const [selectedRateIndex, setSelectedRateIndex] = useState<number>(0);
  const [visiblePlanModal, setVisiblePlanModal] = useState<boolean>(false);
  const [visibleDestinationModal, setVisibleDestinationModal] = useState<
    boolean
  >(false);
  const [visibleAdditionalModal, setVisibleAdditionalModal] = useState<boolean>(
    false,
  );
  const [airCondition, setAirCondition] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    getRates({ ac_rate: airCondition ? 1 : 0, distance: Math.ceil(distance) });
  }, [airCondition, distance, regionId]);

  const findCar = () => {
    bookCar({
      payload: {
        comment,
        ac_rate: airCondition,
        rate_id: rates[selectedRateIndex].id,
        distance: `${0}`,
        option_ids: airCondition ? [4] : [],
      },
    });
  };

  return (
    <>
      <DestinationModal
        visible={visibleDestinationModal}
        closeModal={() => setVisibleDestinationModal(false)}
      />
      <PlanItemInfoModal
        rateInfo={rates[selectedRateIndex] ?? {}}
        visible={visiblePlanModal}
        closeModal={() => setVisiblePlanModal(false)}
      />
      <AdditionalOptionsModal
        airCondition={airCondition}
        setAirCondition={(val: number) => setAirCondition(val)}
        visible={visibleAdditionalModal}
        comment={comment}
        setComment={(text: string) => setComment(text)}
        closeModal={() => setVisibleAdditionalModal(false)}
      />
      <BookingPanelView
        rates={rates}
        findCar={findCar}
        isLoading={isLoading}
        to={destinationInfo?.name as string}
        cancelDestination={cancelDestination}
        selectedRateIndex={selectedRateIndex}
        setVisiblePlanModal={setVisiblePlanModal}
        from={currentLocationInfo?.name as string}
        setSelectedRateIndex={setSelectedRateIndex}
        openAdditionalModal={() => setVisibleAdditionalModal(true)}
        openDestinationModal={() => setVisibleDestinationModal(true)}
      />
    </>
  );
};

export default BookingPanelController;
