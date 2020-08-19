import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from "react-native"
import {connect} from "react-redux";
import MapView, {Marker} from 'react-native-maps';
import {GetCurrentLocation, SetDestinationDetails, SetMarkerPosition} from "../store/constants/map";
import {bindActionCreators} from "redux";

import MapViewDirections from "react-native-maps-directions";
import Colors from "../assets/styles/Colors";
import Screen from "../helpers/Dimensions";
import API_KEY from "../const/apiKey";


const MapScreen = ({map, SetDestinationDetails, SetMarkerPosition, order}) => {

    const [mapRef, setMapRef] = useState(null);

    // useEffect(() => {
    //     if (Object.keys(map.marker) === 0) {
    //         console.log('2');
    //         SetMarkerPosition({
    //             ...map.currentLocation.coords,
    //             latitudeDelta: 0.02,
    //             longitudeDelta: 0.01,
    //         })
    //     }
    // }, []);

    useEffect(() => {
        if (mapRef) {
            mapRef.animateToRegion({
                ...map.currentLocation.coords,
                latitudeDelta: 0.02,
                longitudeDelta: 0.01,
            })
        }
    }, [map.currentLocation]);


    const onRegionChange = region => {
        if (Object.keys(map.destination).length === 0) {
            SetMarkerPosition(region)
        }
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={ref => setMapRef(ref)}
                showsBuildings
                showsIndoors
                onRegionChangeComplete={onRegionChange}
                style={styles.map}
                provider={"google"}
                initialRegion={{
                    ...map.currentLocation.coords,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }}
            >
                {
                    !map.destination &&
                    <Marker
                        coordinate={map.currentLocation.coords}
                        image={require('../assets/images/CurrentLocationIcon.png')}
                    />
                }
                {
                    map.destination && <MapViewDirections
                        origin={map.marker}
                        mode={"DRIVING"}
                        destination={map.destination.coords}
                        apikey={API_KEY}
                        strokeWidth={6}
                        strokeColor={Colors.blue}
                        onReady={(direction) => {
                            SetDestinationDetails({
                                distance: direction.distance,
                                duration: direction.duration
                            });
                            mapRef.fitToCoordinates([map.marker, map.destination.coords], {
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
            {
                Object.keys(map.destination).length === 0 &&
                <View style={styles.overlay}>
                    <View style={styles.circle}/>
                    <View style={styles.stick}/>
                </View>
            }
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
        zIndex: 999,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top: Screen.height / 2 - 58,
    },
    circle: {
        width: 40,
        height: 40,
        backgroundColor: '#323637',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff'
    },
    stick: {
        width: 2,
        backgroundColor: '#323637',
        height: 18,
    }
});

const mapStateToProps = ({map, booking: {order}}) => ({
    map,
    order
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
