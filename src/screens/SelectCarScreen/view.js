import React from 'react';
import { View, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';

import MapScreen from '../MapScreen';
import Header from '../../components/Header/Header';
import PlanItemInfoModal from '../../components/PlanItemInfoModal';
import AdditionalOptionsModal from '../../components/AdditionalOptionsModal';
import styles from './styles';
import CarItem from '../../components/CarItem';
import { Bold, Regular, SemiBold } from '../../components/Layout/AppText';
import ArrowIcon from '../../assets/images/ArrowIcon';
import { localization } from '../../services/Localization';
import AddIcon from '../../assets/images/AddIcon';
import SelectedDestination from '../../components/SelectedDestanation';
import Button from '../../components/Button';
import WalletIcon from '../../assets/images/WalletIcon';
import PulseAnimation from '../../components/PulseAnimation/view';
import GetCurrentLocationButton from '../../components/GetCurrentLocationButton';
import DestinationModal from '../DestinationModalScreen';

const SelectCarScreenView = ({
  rates,
  updateState,
  state,
  findCar,
  cancelOrder,
  drivers,
  destinationName,
}) => {
  const {
    visiblePlanModal,
    visibleAdditionalModal,
    rate,
    rateInfo,
    comment,
    airCondition,
    mapRef,
    isOrderSuccess,
    visibleDestinationModal,
    isDestSelecting,
    isCanceling,
    isLoading,
    currentLocationText,
    destinationText,
  } = state;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexGrow: 1 }}>
        <Header goBack={!isOrderSuccess} subText={'Детали заказа'} />
        <MapScreen
          drivers={drivers}
          mapRef={mapRef}
          showMarker={!isOrderSuccess}
          markerPosition
          setMapRef={(ref) => updateState('mapRef', ref)}
          isDestSelecting={isDestSelecting}>
          {isOrderSuccess && <PulseAnimation />}
        </MapScreen>
      </View>
      <View>
        {visibleDestinationModal && (
          <DestinationModal
            to={destinationText}
            from={currentLocationText}
            visible={visibleDestinationModal}
            closeModal={() => updateState('visibleDestinationModal', false)}
            setIsDestSelecting={(val) => updateState('isDestSelecting', val)}
          />
        )}
        <PlanItemInfoModal
          rateInfo={rateInfo}
          visible={visiblePlanModal}
          closeModal={() => updateState('visiblePlanModal', false)}
        />
        <AdditionalOptionsModal
          airCondition={airCondition}
          setAirCondition={(val) => updateState('airCondition', val)}
          visible={visibleAdditionalModal}
          comment={comment}
          setComment={(text) => updateState('comment', text)}
          closeModal={() => updateState('visibleAdditionalModal', false)}
        />
        <View style={{ marginTop: 'auto' }}>
          {!isOrderSuccess && (
            <View style={{ marginRight: 10, top: 10 }}>
              <GetCurrentLocationButton
                mapRef={mapRef}
                zoom={{
                  latitudeDelta: 0.002,
                  longitudeDelta: 0.001,
                }}
              />
            </View>
          )}
          {isDestSelecting ? (
            <View style={styles.container}>
              <View style={styles.destWrapper}>
                <View style={[styles.addressCircle]}>
                  <View style={styles.innerCircle} />
                </View>
                <SemiBold style={{ fontSize: 18 }}>{destinationName}</SemiBold>
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  title={localization.done}
                  onPress={() => updateState('isDestSelecting', false)}
                />
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              {!isOrderSuccess && (
                <>
                  <FlatList
                    ListEmptyComponent={() => {
                      return [...new Array(6)].map((item, index) => (
                        <CarItem key={index} index={index} />
                      ));
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.plan}
                    style={{ width: '100%' }}
                    horizontal
                    decelerationRate={10}
                    snapToInterval={186}
                    data={rates.data}
                    renderItem={({ item, index }) => {
                      return (
                        <CarItem
                          index={index}
                          inflated={item.inflated}
                          title={item.title}
                          key={index}
                          image={item.icon}
                          price={item.price}
                          onPress={() => {
                            item.title === 'Перегон' &&
                              Alert.alert(
                                'Внимание',
                                'При вызове тарифа "Перегон" пожалуйста убудитесь, что ваш полис обязательного страхования на неограниченное количество лиц. SnapTaxi не несет ответственности за наружение ПДД.',
                                [
                                  {
                                    text: 'Понятно',
                                  },
                                ],
                              );
                            updateState('rate', item);
                          }}
                          active={rate.id === item.id}
                          onInfoPress={() => {
                            updateState('rateInfo', item);
                            updateState('visiblePlanModal', true);
                          }}
                        />
                      );
                    }}
                    snapToAlignment={'start'}
                    showsHorizontalScrollIndicator={false}
                  />
                  <View style={styles.optionsWrapper}>
                    <View style={styles.column}>
                      <View style={styles.findCar}>
                        <WalletIcon style={{ marginRight: 16.6, top: -3 }} />
                        <Regular style={styles.text}>
                          {localization.byCash}
                        </Regular>
                        <ArrowIcon style={{ marginLeft: 'auto' }} />
                      </View>
                    </View>
                    <View style={styles.column}>
                      <TouchableWithoutFeedback
                        onPress={() =>
                          updateState('visibleAdditionalModal', true)
                        }>
                        <View style={styles.additional}>
                          <Bold style={styles.text}>
                            {localization.additional}
                          </Bold>
                          <AddIcon color={'#575f6b'} />
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </>
              )}
              <SelectedDestination
                containerStyle={styles.selectDest}
                to={destinationText || 'Куда едем ?'}
                from={currentLocationText}
                disabled={isOrderSuccess}
                selectDestination={() =>
                  updateState('visibleDestinationModal', true)
                }
              />
              <View style={styles.buttonWrapper}>
                {!isOrderSuccess ? (
                  <Button
                    isLoading={isLoading}
                    title={localization.findTaxi}
                    onPress={findCar}
                  />
                ) : (
                  <Button
                    isLoading={isCanceling}
                    title={localization.cancel}
                    onPress={cancelOrder}
                  />
                )}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SelectCarScreenView;
