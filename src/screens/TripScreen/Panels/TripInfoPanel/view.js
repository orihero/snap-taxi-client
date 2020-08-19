import React from 'react';
import {View} from "react-native"

import styles from "./styles";
import Button from "../../../../components/Button";
import SelectedDestination from "../../../../components/SelectedDestanation/SelectedDestination";
import DriverInfo from "../../../../components/DriverInfo/DriverInfo";
import BottomMenuCurve from "../../../../assets/images/BottomMenuCurve";
import {localization} from "../../../../services/Localization";
import {Bold, Regular} from "../../../../components/Layout/AppText";
import Screen from "../../../../helpers/Dimensions";


const TripInfoPanelView = ({routes, cancelOrder, driver, price}) => {
    return (
        <>
            <View style={{marginTop: 'auto'}}>
                <DriverInfo
                    name={driver.name}
                    phone={driver.phone}
                />
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Screen.width - 32}/>
                    <View style={styles.container}>
                        <View style={styles.fee}>
                            <Bold style={{fontSize: 17}}>{localization.fee}</Bold>
                            <Bold style={styles.tripFee}>{price} </Bold>
                            <Regular style={{lineHeight: 25}}>сум</Regular>
                        </View>
                        <SelectedDestination
                            containerStyle={{paddingBottom: 17, paddingTop: 11}}
                            from={routes[0].address}
                            to={routes[1].address}
                        />
                        <Button title={localization.cancelTrip} onPress={cancelOrder}/>
                    </View>
                </View>
            </View>
        </>
    );
};


export default TripInfoPanelView;
