import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions, Text} from "react-native"
import DriverInfo from "../components/DriverInfo";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import {DestContent} from "../components/SelectedDestination";
import Colors from "../assets/styles/Colors";

const MyTripsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{paddingHorizontal: 16}}>
                <View style={styles.tripItem}>
                    <DriverInfo finished activeExclaim/>
                    <View style={styles.shadow}>
                        <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                        <View style={styles.content}>
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={styles.textWrapper}>
                                <Text style={styles.text}>Id 4562455865</Text>
                                <Text style={styles.text}>12.03.2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tripItem}>
                    <DriverInfo finished/>
                    <View style={styles.shadow}>
                        <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                        <View style={styles.content}>
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={styles.textWrapper}>
                                <Text style={styles.text}>Id 4562455865</Text>
                                <Text style={styles.text}>12.03.2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tripItem}>
                    <DriverInfo finished activeExclaim/>
                    <View style={styles.shadow}>
                        <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                        <View style={styles.content}>
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={styles.textWrapper}>
                                <Text style={styles.text}>Id 4562455865</Text>
                                <Text style={styles.text}>12.03.2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tripItem}>
                    <DriverInfo finished/>
                    <View style={styles.shadow}>
                        <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                        <View style={styles.content}>
                            <DestContent containerStyle={{paddingBottom: 17, paddingTop: 11}}/>
                            <View style={styles.textWrapper}>
                                <Text style={styles.text}>Id 4562455865</Text>
                                <Text style={styles.text}>12.03.2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
        marginTop: -44
    },
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
        marginBottom: 20
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

export default MyTripsScreen;