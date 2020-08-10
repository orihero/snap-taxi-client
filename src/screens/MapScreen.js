import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from "react-native"
import {connect} from "react-redux";
import MapView, {Marker, Overlay} from 'react-native-maps';
import {GetCurrentLocation, SetDestinationDetails, SetMarkerPosition} from "../store/constants/map";
import {bindActionCreators} from "redux";

import MapViewDirections from "react-native-maps-directions";
import Colors from "../assets/styles/Colors";
import Screen from "../helpers/Dimensions";


const MapScreen = ({map, SetDestinationDetails, SetMarkerPosition}) => {

    const [mapRef, setMapRef] = useState(null);

    useEffect(() => {
        SetMarkerPosition({
            ...map.currentLocation,
            latitudeDelta: 0.02,
            longitudeDelta: 0.01,
        })
    }, []);


    return (
        <View style={styles.container}>
            <MapView
                ref={ref => setMapRef(ref)}
                showsMyLocationButton
                showsBuildings
                showsIndoors
                onRegionChangeComplete={(region) => SetMarkerPosition(region)}
                style={styles.map}
                initialRegion={{
                    ...map.currentLocation,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={map.currentLocation}
                    image={require('../assets/images/CurrentLocationIcon.png')}
                />
                {
                    map.destination && <MapViewDirections
                        origin={map.currentLocation}
                        mode={"DRIVING"}
                        destination={map.destination.coords}
                        apikey={'AIzaSyAg85fttaNZA_wmaZgvpFfzrUs8ohWrVBc'}
                        strokeWidth={6}
                        strokeColor={Colors.blue}
                        onReady={(direction) => {
                            SetDestinationDetails({
                                distance: direction.distance,
                                duration: direction.duration
                            });
                            mapRef.fitToCoordinates([map.currentLocation, map.destination.coords], {
                                edgePadding: {
                                    top: 20,
                                    right: 20,
                                    bottom: 50,
                                    left: 20,
                                },
                            });
                        }}
                    />
                }
            </MapView>
            <View style={styles.overlay}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        width: 20,
        height: 20,
        zIndex: 999,
        backgroundColor: '#000',
        position: 'absolute',
        alignSelf: 'center',
        top: Screen.height / 2 - 20
    },
});

const mapStateToProps = ({map}) => ({
    map
});

const mapDispatchToProps = dispatch => bindActionCreators({
    GetCurrentLocation,
    SetDestinationDetails: (payload) => ({
        type: SetDestinationDetails.SUCCESS,
        payload
    }),
    SetMarkerPosition: (payload) => ({
        type: SetMarkerPosition.SUCCESS,
        payload
    }),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
