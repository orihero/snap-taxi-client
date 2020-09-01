import React from 'react'
import {View} from "react-native"
import MapView, {Circle} from 'react-native-maps';
import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import Colors from "../../assets/styles/Colors";
import API_KEY from "../../const/apiKey";
import {Regular} from "../../components/Layout/AppText";


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
        setMapRef
    }) => {
    return (
        <View
            style={mapStyles ? mapStyles : styles.container}
            onLayout={({nativeEvent: {layout}}) => setMapHeight(layout.height)}
        >
            <MapView
                ref={ref => setMapRef(ref)}
                showsUserLocation
                followsUserLocation
                showsBuildings
                rotateEnabled={false}
                pitchEnabled={false}
                showsIndoors
                showsMyLocationButton={false}
                onRegionChangeComplete={onRegionChange}
                style={mapStyles ? mapStyles : styles.map}
                provider={"google"}
                initialRegion={initialRegion}
            >
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
                <View style={[styles.overlay, {top: mapHeight / 2 - 58}]}>
                    <View style={styles.circle}>
                        <Regular style={{color: '#fff', marginBottom: -10}}>2</Regular>
                        <Regular style={{color: '#fff', fontSize: 10}}>min</Regular>
                    </View>
                    <View style={styles.stick}/>
                </View>
            }

        </View>
    )
};


export default MapScreenView
