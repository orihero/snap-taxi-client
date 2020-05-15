import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Dimensions} from 'react-native'
import DriverInfo from "./DriverInfo";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import {DestContent} from "./SelectedDestination";
import {Bold, Light} from "./Layout/AppText";
import Colors from "../assets/styles/Colors";
import StarIcon from "../assets/images/StarIcon";
import Button from "./Button";

const TripItem = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={() => setIsCollapsed(!isCollapsed)}>
            <View style={styles.tripItem}>
                <DriverInfo finished activeExclaim/>
                <View style={styles.shadow}>
                    <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                    <View style={styles.content}>
                        <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}} noIcon/>
                        <View style={styles.textWrapper}>
                            <Light style={styles.text}>Id 4562455865</Light>
                            <Light style={styles.text}>12.03.2020</Light>
                        </View>
                        <View style={{height: isCollapsed ? 'auto' : 0}}>
                            <View style={styles.textWrapper}>
                                <Bold style={{fontSize: 16}}>Ваша оценка</Bold>
                                <Bold style={{fontSize: 16}}>4 <StarIcon active width={17.19} height={16.48}/></Bold>
                            </View>
                            <View style={styles.textWrapper}>
                                <Bold style={{fontSize: 16}}>Цена:</Bold>
                                <Bold style={{fontSize: 16, color: Colors.blue}}>12 500 сум</Bold>
                            </View>
                            <Button title={'Пожаловаться'} containerStyle={{marginBottom: 20.4, marginTop: 10}}/>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    shadow: {
        elevation: 10,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden'
    },
    content: {
        backgroundColor: Colors.background,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0
    },
    tripItem: {
        marginBottom: 20,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 6,
        borderTopWidth: 1,
        borderTopColor: '#EAECF1'
    },
    text: {
        color: '#646974'
    }
});

export default TripItem;
