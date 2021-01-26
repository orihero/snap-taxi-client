import React, {useState} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native'
import styles from "./styles";

import DriverInfo from "../DriverInfo/DriverInfo";
import BottomMenuCurve from "../../assets/images/BottomMenuCurve";
import SelectedDestination from "../SelectedDestanation/SelectedDestination";
import {Bold, Light} from "../Layout/AppText";
import Colors from "../../assets/styles/Colors";
import StarIcon from "../../assets/images/StarIcon";
import Screen from "../../helpers/Dimensions";

const TripItem = ({from, to, id, date, driverName, car, distance, waitingTime, price}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
      <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
        <View style={styles.tripItem}>
          <DriverInfo
            car={car}
            finished
            activeExclaim
            noIcons
            name={driverName}
          />
          <View style={styles.shadow}>
            <BottomMenuCurve width={Screen.width - 32} />
            <View style={styles.content}>
              <SelectedDestination
                containerStyle={{ paddingBottom: 17, paddingTop: 11 }}
                noIcon
                from={from}
                to={to}
              />
              <View style={styles.textWrapper}>
                <Light style={styles.text}>Id {id}</Light>
                <Light style={styles.text}>{date}</Light>
              </View>
              <View style={{ height: isCollapsed ? 'auto' : 0 }}>
                <View style={styles.textWrapper}>
                  <Bold style={{ fontSize: 16 }}>Ваша оценка</Bold>
                  <Bold style={{ fontSize: 16 }}>
                    4 <StarIcon active width={17.19} height={16.48} />
                  </Bold>
                </View>
                <View style={styles.textWrapper}>
                  <Bold style={{ fontSize: 16 }}>Дистанция</Bold>
                  <Bold style={{ fontSize: 16 }}>{distance} км</Bold>
                </View>
                <View style={styles.textWrapper}>
                  <Bold style={{ fontSize: 16 }}>Время ожидание</Bold>
                  <Bold style={{ fontSize: 16 }}>{waitingTime || 0} сек</Bold>
                </View>
                <View style={styles.textWrapper}>
                  <Bold style={{ fontSize: 16 }}>Цена:</Bold>
                  <Bold style={{ fontSize: 16, color: Colors.blue }}>
                    {price} сум
                  </Bold>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
};


export default TripItem;
