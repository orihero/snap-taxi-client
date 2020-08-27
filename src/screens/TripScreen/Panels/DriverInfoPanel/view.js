import React from 'react';
import {View, Dimensions, Animated, StatusBar} from "react-native"

import styles from "./styles";
import Button from "../../../../components/Button";
import SelectedDestination from "../../../../components/SelectedDestanation/SelectedDestination";
import DriverInfo from "../../../../components/DriverInfo/DriverInfo";
import BottomMenuCurve from "../../../../assets/images/BottomMenuCurve";
import ComingIcon from "../../../../assets/images/ComingIcon";
import CancelTripIcon from "../../../../assets/images/CancelTripIcon";
import WaitIcon from "../../../../assets/images/WaitIcon";
import {Bold, Regular} from "../../../../components/Layout/AppText";
import {localization} from "../../../../services/Localization";
import SwitchWithText from "../../../../components/SwitchWithText";
import AirConditionIcon from "../../../../assets/images/AirConditionIcon";

const DriverInfoPanelView = (
    {
        backgroundColor,
        panResPonder,
        airCondition,
        setAirCondition,
        collapse,
        routes,
        cancelOrder,
        driver,
        price
    }) => {
    return (
        <>
            <Animated.View style={[{backgroundColor}, styles.overlay]} pointerEvents={'none'}/>
            <View style={{marginTop: 'auto'}}>
                <StatusBar setBarStyle={{backgroundColor}}/>
                <DriverInfo
                    name={driver && driver.name}
                    phone={driver && driver.phone}
                />
                <View style={[styles.shadow]}  {...panResPonder.panHandlers}>
                    <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.draggable}/>
                        <View style={styles.actionButtons}>
                            <View style={styles.icon}>
                                <ComingIcon/>
                            </View>
                            <View style={[styles.icon, {marginHorizontal: 38}]}>
                                <CancelTripIcon/>
                            </View>
                            <View style={styles.icon}>
                                <WaitIcon/>
                            </View>
                        </View>
                        <Animated.View style={{height: collapse, overflow: 'hidden'}}>
                            <View style={styles.fee}>
                                <Bold style={{fontSize: 17}}>{localization.fee}</Bold>
                                <Bold style={{fontSize: 17, marginLeft: 'auto'}}>{price} </Bold>
                                <Regular style={{lineHeight: 25}}>сум</Regular>
                            </View>
                            <View style={styles.destinationWrapper}>
                                <SelectedDestination
                                    containerStyle={{marginBottom: 10, paddingTop: 11}}
                                    from={routes[0].address}
                                    to={routes[1].address}
                                />
                            </View>
                            <SwitchWithText
                                style={styles.switch}
                                Icon={AirConditionIcon}
                                text={localization.airCondition}
                                setValue={setAirCondition}
                                value={airCondition}
                            />
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={styles.column}>
                                    <Button title={localization.moreTaxi} shadow/>
                                </View>
                                <View style={styles.column}>
                                    <Button
                                        title={localization.cancel}
                                        containerStyle={{backgroundColor: '#f2f2f2'}}
                                        onPress={cancelOrder}
                                    />
                                </View>
                            </View>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </>
    );
};


export default DriverInfoPanelView;