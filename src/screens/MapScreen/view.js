import React from 'react'
import {View, Image, Animated} from "react-native"
import MapView, {Circle, Marker} from 'react-native-maps';
import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import Colors from "../../assets/styles/Colors";
import API_KEY from "../../const/apiKey";
import {Regular} from "../../components/Layout/AppText";
import Screen from "../../helpers/Dimensions";


const MapScreenView = (
    {
        onRegionChange,
        mapRef,
        setMapHeight,
        mapHeight,
        initialRegion,
        map,
        mapStyles,
        SetDestinationDetails,
        setMapRef,
        children,
        drivers,
        showMarker,
        circle,
        minutes,
        opacity,
        order,
        routes
    }) => {
    return (
        <View
            style={mapStyles ? mapStyles : styles.container}
            onLayout={({nativeEvent: {layout}}) => setMapHeight(layout.height)}
        >
            <MapView
                ref={ref => setMapRef(ref)}
                showsUserLocation
                // followsUserLocation
                showsBuildings
                rotateEnabled={false}
                pitchEnabled={false}
                // showsIndoors
                showsMyLocationButton={false}
                onRegionChangeComplete={onRegionChange}
                style={mapStyles ? mapStyles : styles.map}
                provider={"google"}
                initialRegion={initialRegion}
            >
                {
                    (!order.status || order.status === 'new') && drivers.map(item => (
                        <Marker coordinate={{longitude: Number(item.lng), latitude: Number(item.lat)}}>
                            <Image style={styles.marker} source={require('../../assets/images/car.png')}/>
                        </Marker>
                    ))
                }
                {/*{*/}
                {/*    map.destination && <>*/}
                {/*        <Circle*/}
                {/*            radius={20}*/}
                {/*            fillColor={'#000'}*/}
                {/*            center={{...map.marker}}*/}
                {/*        />*/}
                {/*        <Circle*/}
                {/*            radius={20}*/}
                {/*            fillColor={'#000'}*/}
                {/*            center={{...map.destination.coords}}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*}*/}
                {
                    map.destination && order.status !== 'accepted' && <MapViewDirections
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
                {
                    order.driver &&
                    <Marker coordinate={{longitude: Number(order.driver.lng), latitude: Number(order.driver.lat)}}>
                        <Image style={styles.marker} source={require('../../assets/images/car.png')}/>
                    </Marker>
                }
                {
                    order.driver && order.status === 'accepted' && !showMarker && <MapViewDirections
                        origin={{latitude: routes.lat, longitude: routes.lng}}
                        mode={"DRIVING"}
                        destination={{latitude: order.driver.lat, longitude: order.driver.lng}}
                        apikey={API_KEY}
                        strokeWidth={6}

                        strokeColor={Colors.blue}
                        onReady={(direction) => {
                            mapRef.fitToCoordinates([{
                                latitude: parseFloat(routes.lat),
                                longitude: parseFloat(routes.lng)
                            }, {
                                latitude: parseFloat(order.driver.lat),
                                longitude: parseFloat(order.driver.lng)
                            }], {
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
                Object.keys(map.destination).length === 0 && showMarker &&
                <View style={[styles.overlay, {top: mapHeight / 2 - 90}]}>
                    <View style={styles.circle}>
                        {
                            circle
                                ? <Animated.View style={[styles.cc, {opacity}]}/>
                                : <>
                                    <Regular style={{color: '#fff', fontSize: 20, marginBottom: -10}}>
                                        {minutes}
                                    </Regular>
                                    <Regular style={{color: '#fff', fontSize: 15}}>min</Regular>
                                </>
                        }
                    </View>
                    <View style={styles.stick}/>
                </View>
            }
            {
                children &&
                <View style={{height: mapHeight, width: Screen.width, zIndex: 999}}>
                    <View style={[{top: mapHeight / 2, left: Screen.width / 2}]}>
                        {children}
                    </View>
                </View>
            }
        </View>
    )
};


export default MapScreenView
