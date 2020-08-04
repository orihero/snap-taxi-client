import React, {useState} from 'react'
import {View, StyleSheet} from "react-native"
import {connect} from "react-redux";
import MapView, {Marker} from 'react-native-maps';
import {GetCurrentLocation} from "../store/constants/map";
import {bindActionCreators} from "redux";

import MapViewDirections from "react-native-maps-directions";
import Colors from "../assets/styles/Colors";

const MapScreen = ({map}) => {
    const [coordinates, setCoordinates] = useState();
    const onRegionChange = (region) => {
        setCoordinates(region)
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    ...map.currentLocation,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01,
                }}
                // onRegionChange={onRegionChange}
                // customMapStyle={MapStyle}
            >
                <Marker
                    coordinate={map.currentLocation}
                    onDragEnd={(e) => {
                        setCoordinates({x: e.nativeEvent.coordinate});
                    }}
                    image={require('../assets/images/CurrentLocationIcon.png')}
                />
                {
                    map.destination && <MapViewDirections
                        origin={map.currentLocation}
                        destination={map.destination.coords}
                        apikey={'AIzaSyAg85fttaNZA_wmaZgvpFfzrUs8ohWrVBc'}
                        strokeWidth={6}
                        strokeColor={Colors.blue}
                    />
                }
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: -1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const mapStateToProps = ({map}) => ({
    map
});

const mapDispatchToProps = dispatch => bindActionCreators({
    GetCurrentLocation
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
