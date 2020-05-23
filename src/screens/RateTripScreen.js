import React, {useEffect} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native"
import DriverInfo from "../components/DriverInfo/DriverInfo";
import BottomMenuCurve from "../assets/images/BottomMenuCurve";
import Colors from "../assets/styles/Colors";
import StarIcon from "../assets/images/StarIcon";
import TimeIcon from "../assets/images/TimeIcon";
import EmptyWalletIcon from "../assets/images/EmptyWalletIcon";
import DistanceIcon from "../assets/images/DistanceIcon";
import Button from "../components/Button";
import BackButtonIcon from "../assets/images/BackButtonIcon";
import MapScreen from "./MapScreen";
import {localization} from "../services/Localization";

const Rate = () => (
    <View style={styles.startContainer}>
        <StarIcon active style={{marginRight: 10}} width={35.26} height={33.79}/>
        <StarIcon active style={{marginRight: 10}} width={35.26} height={33.79}/>
        <StarIcon active style={{marginRight: 10}} width={35.26} height={33.79}/>
        <StarIcon active style={{marginRight: 10}} width={35.26} height={33.79}/>
        <StarIcon width={35.26} height={33.79}/>
    </View>
);

const RateTripScreen = ({navigation}) => {
    useEffect(() => {
        const navListener = navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('rgba(0,0,0,.2)');
        });
        return navListener
    }, [navigation]);
    return (
        <>
            <MapScreen/>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                        <BackButtonIcon style={{position: 'absolute', left: 0}}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>{localization.tripFinished}</Text>
                </View>
                <ScrollView>
                    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'}>
                        <View style={styles.wrapper}>
                            <DriverInfo noIcons/>
                            <View style={styles.shadow}>
                                <BottomMenuCurve width={Dimensions.get('window').width - 32}/>
                                <View style={styles.content}>
                                    <View style={{alignItems: 'center', textAlign: 'center'}}>
                                        <Text style={styles.heading}>{localization.howWasTrip}</Text>
                                        <Text style={styles.subHeading}>{localization.helpUsToBeBetter}</Text>
                                    </View>
                                    <Rate/>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 25
                                    }}>
                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{localization.yourMark}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{fontSize: 16, fontWeight: 'bold', marginRight: 4}}>4</Text>
                                            <StarIcon active width={17.19} height={16.48}/>
                                        </View>
                                    </View>
                                    <View style={styles.textarea}>
                                        <TextInput
                                            multiline={true}
                                            placeholder={localization.leaveFeedBack}
                                        />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 46
                                    }}>
                                        <View style={{alignItems: 'center'}}>
                                            <TimeIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripTime}</Text>
                                            <Text style={{color: '#232323', fontWeight: 'bold', fontSize: 17}}>13
                                                мин</Text>
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <EmptyWalletIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripCost}</Text>
                                            <Text style={{color: '#232323', fontWeight: 'bold', fontSize: 17}}>35
                                                500</Text>
                                        </View>
                                        <View style={{alignItems: 'center'}}>
                                            <DistanceIcon/>
                                            <Text style={{color: '#646974'}}>{localization.tripDistance}</Text>
                                            <Text style={{color: '#232323', fontWeight: 'bold', fontSize: 17}}>13
                                                км</Text>
                                        </View>
                                    </View>
                                    <Button
                                        title={localization.done}
                                        onPress={() => navigation.navigate('Home')}
                                    />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.2)',
            paddingHorizontal: 16,
            paddingTop: 20
        },
        shadow: {
            alignSelf: 'center',
            borderRadius: 15,
            overflow: 'hidden',
        },
        content: {
            backgroundColor: Colors.background,
            paddingHorizontal: 15,
            borderWidth: 2,
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
            borderColor: '#fff',
            borderTopWidth: 0,
            paddingBottom: 30,
        },
        heading: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10
        },
        subHeading: {
            textAlign: 'center',
            color: '#646974',
            marginBottom: 23.6
        },
        startContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingBottom: 19.6,
            marginBottom: 16,
            borderBottomColor: '#EAECF1',
            borderBottomWidth: 1
        },
        textarea: {
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 10,
            elevation: 10,
            backgroundColor: Colors.background,
            height: 126,
            marginBottom: 46
        }
    })
;

export default RateTripScreen;
