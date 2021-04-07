import React, { useEffect, useRef, useState } from 'react';
import BookingPanelView from './view';
import { Props } from './connect';
import PlanItemInfoModal from '@components/PlanItemInfoModal';
import AdditionalOptionsModal from '@components/AdditionalOptionsModal';
import DestinationModal from '../../../DestinationModalScreen';
import BottomSheet from '@components/BottomSheet/BottomSheet';
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import CancelIcon from '@assets/images/CancelIcon';
import { SemiBold } from '@components/Layout/AppText';
import { localization } from '../../../../services/Localization';
import styles from './styles';
const BookingPanelController = ({
  rates,
  bookCar,
  getRates,
  distance,
  regionId,
  isLoading,
  quickComments,
  destinationInfo,
  cancelDestination,
  currentLocationInfo,
}: Props) => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => setIsKeyboardActive(true);
  const _keyboardDidHide = () => setIsKeyboardActive(false);

  const modalRef = useRef<BottomSheet>();
  const [selectedRateIndex, setSelectedRateIndex] = useState<number>(0);
  const [isKeyboardActive, setIsKeyboardActive] = useState<boolean>(false);
  const [visiblePlanModal, setVisiblePlanModal] = useState<boolean>(false);
  const [visibleDestinationModal, setVisibleDestinationModal] = useState<
    boolean
  >(false);
  const [visibleAdditionalModal, setVisibleAdditionalModal] = useState<boolean>(
    false,
  );
  const [airCondition, setAirCondition] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [height, setHeight] = useState(500);
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

  const CommentItem = ({ text }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setComment(text)}
        style={styles.commentItem}>
        <SemiBold>{text}</SemiBold>
      </TouchableOpacity>
    );
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
        showBottomSheet={() => modalRef.current.show()}
        closeModal={() => setVisibleAdditionalModal(false)}
      />
      <BottomSheet
        hasDraggableIcon
        ref={modalRef}
        height={!isKeyboardActive ? height + 100 : 100}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => modalRef.current.close()}>
            <CancelIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modalRef.current.close()}>
            <SemiBold>{localization.done}</SemiBold>
          </TouchableOpacity>
        </View>
        <TextInput
          multiline
          value={comment}
          onChangeText={setComment}
          style={{ marginHorizontal: 15 }}
          placeholder={localization.comment}
        />
        <View
          style={styles.commentsWrapper}
          onLayout={(event) => setHeight(event.nativeEvent.layout.height)}>
          {quickComments.map((cm) => (
            <CommentItem key={cm.id} text={cm.title} />
          ))}
        </View>
      </BottomSheet>
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
