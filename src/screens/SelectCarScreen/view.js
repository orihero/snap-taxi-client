import React from 'react';
import {View, TouchableWithoutFeedback, FlatList, Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import MapScreen from "../MapScreen";
import Header from "../../components/Header/Header";
import PlanItemInfoModal from "../../components/PlanItemInfoModal";
import AdditionalOptionsModal from "../../components/AdditionalOptionsModal";
import DeliveryInfoModal from "../../components/DeliveryInfoModal";
import styles from "./styles";
import CarItem from "../../components/CarItem";
import UzcardIcon from "../../assets/images/UzcardIcon";
import {Bold, Regular} from "../../components/Layout/AppText";
import ArrowIcon from "../../assets/images/ArrowIcon";
import {localization} from "../../services/Localization";
import AddIcon from "../../assets/images/AddIcon";
import SelectedDestination from "../../components/SelectedDestanation";
import Button from "../../components/Button";
import WalletIcon from "../../assets/images/WalletIcon";
import PulseAnimation from "../../components/PulseAnimation/view";
import GetCurrentLocationButton from "../../components/GetCurrentLocationButton";
import DestinationModal from "../DestinationModalScreen";

const Dots = () => {
    return (
        <View style={styles.dots}>{
            [...new Array(4)].map((item, index) => (
                <View style={styles.dot} key={index}/>
            ))}
        </View>
    )
};


const SelectCarScreenView = (
    {
        rates,
        setters,
        values,
        duration,
        destination,
        currentLocation,
        findCar,
        isLoading,
        paymentMethod,
        cancelOrder,
        drivers
    }) => {
    const navigation = useNavigation();

    const {
        setVisiblePlanModal,
        setVisibleAdditionalModal,
        setVisibleDeliveryModal,
        setRate,
        setRateInfo,
        setComment,
        setAirCondition,
        setMapRef,
        setVisibleDestinationModal
    } = setters;

    const {
        visiblePlanModal,
        visibleAdditionalModal,
        visibleDeliveryModal,
        rate,
        rateInfo,
        comment,
        airCondition,
        mapRef,
        isOrderSuccess,
        visibleDestinationModal
    } = values;

    return (
        <View style={{flex: 1}}>
            <View style={{flexGrow: 1}}>
                <Header
                    goBack={!isOrderSuccess}
                    subText={'Детали заказа'}
                />
                <MapScreen
                    drivers={drivers}
                    mapRef={mapRef}
                    showMarker={!isOrderSuccess}
                    markerPosition
                    setMapRef={setMapRef}
                    zoom={{
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.001
                    }}
                >
                    {isOrderSuccess && <PulseAnimation/>}
                </MapScreen>
            </View>
            <View>
                <DestinationModal
                    to={destination}
                    from={currentLocation}
                    visible={visibleDestinationModal}
                    closeModal={() => setVisibleDestinationModal(false)}
                />
                <PlanItemInfoModal
                    rateInfo={rateInfo}
                    visible={visiblePlanModal}
                    closeModal={() => setVisiblePlanModal(false)}
                />
                <AdditionalOptionsModal
                    airCondition={airCondition}
                    setAirCondition={setAirCondition}
                    visible={visibleAdditionalModal}
                    comment={comment}
                    setComment={setComment}
                    closeModal={() => setVisibleAdditionalModal(false)}
                />
                <DeliveryInfoModal
                    visible={visibleDeliveryModal}
                    closeModal={() => setVisibleDeliveryModal(false)}
                    openModal={() => setVisibleDeliveryModal(true)}
                />
                <View style={{marginTop: 'auto'}}>
                    {
                        !isOrderSuccess && <View style={{marginRight: 10, top: 10}}>
                            <GetCurrentLocationButton
                                mapRef={mapRef}
                                zoom={{
                                    latitudeDelta: 0.002,
                                    longitudeDelta: 0.001
                                }}
                            />
                        </View>
                    }
                    <View style={styles.container}>
                        {
                            !isOrderSuccess &&
                            <>
                                <FlatList
                                    ListEmptyComponent={() => {
                                        return [...new Array(6)].map((item, index) => (
                                            <CarItem
                                                index={index}
                                            />
                                        ))
                                    }}
                                    contentContainerStyle={styles.plan}
                                    style={{width: '100%'}}
                                    horizontal
                                    decelerationRate={10}
                                    snapToInterval={186}
                                    data={rates.data}
                                    renderItem={({item, index}) => {
                                        return <CarItem
                                            index={index}
                                            title={item.title}
                                            key={index}
                                            price={item.price}
                                            onPress={() => {
                                                index === 4 && setVisibleDeliveryModal(true);
                                                index === 5 && Alert.alert(
                                                    'Внимание',
                                                    'При вызове тарифа "Перегон" пожалуйста убудитесь, что ваш полис обязательного страхования на неограниченное количество лиц. SnapTaxi не несет ответственности за наружение ПДД.',
                                                    [{
                                                        text: 'Понятно'
                                                    }]
                                                );
                                                setRate(item)
                                            }}
                                            active={rate.id === item.id}
                                            onInfoPress={() => {
                                                setRateInfo(item);
                                                setVisiblePlanModal(true)
                                            }}
                                        />
                                    }}
                                    snapToAlignment={"start"}
                                    showsHorizontalScrollIndicator={false}
                                />
                                <View style={styles.optionsWrapper}>
                                    <View style={styles.column}>
                                        {/*paymentMethod === 'card'*/}
                                        {/*    ? <View style={styles.findCar}>*/}
                                        {/*        <UzcardIcon style={{marginRight: 16.6}}/>*/}
                                        {/*        <View style={styles.cardNumber}>*/}
                                        {/*            <Dots/>*/}
                                        {/*            <Dots/>*/}
                                        {/*            <Dots/>*/}
                                        {/*            <Regular style={styles.text}>8797</Regular>*/}
                                        {/*        </View>*/}
                                        {/*        <ArrowIcon style={{marginLeft: 'auto'}}/>*/}
                                        {/*    </View>*/}
                                        {/*    : */}
                                        <View style={styles.findCar}>
                                            <WalletIcon style={{marginRight: 16.6, top: -3}}/>
                                            <Regular style={styles.text}>{localization.byCash}</Regular>
                                            <ArrowIcon style={{marginLeft: 'auto'}}/>
                                        </View>
                                    </View>
                                    <View style={styles.column}>
                                        <TouchableWithoutFeedback onPress={() => setVisibleAdditionalModal(true)}>
                                            <View style={styles.additional}>
                                                <Bold style={styles.text}>{localization.additional}</Bold>
                                                <AddIcon color={'#575f6b'}/>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            </>
                        }
                        <SelectedDestination
                            containerStyle={styles.selectDest}
                            to={destination}
                            from={currentLocation}
                            selectDestination={() => setVisibleDestinationModal(true)}
                        />
                        <View style={styles.buttonWrapper}>
                            {
                                !isOrderSuccess
                                    ? <Button
                                        isLoading={isLoading}
                                        title={localization.findTaxi}
                                        onPress={findCar}
                                    />
                                    : <Button
                                        title={localization.cancel}
                                        onPress={cancelOrder}
                                    />
                            }
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


export default SelectCarScreenView;
