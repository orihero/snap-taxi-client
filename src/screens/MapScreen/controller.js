import React, {useState, useEffect, useRef} from 'react';
import {Animated} from "react-native";
import MapScreenView from "./view";

const MapScreenController = (
    {
        SetMarkerPosition,
        SetDestinationDetails,
        mapStyles,
        map,
        showMarker = true,
        setMapRef,
        mapRef,
        children,
        drivers = [],
        circle,
        zoom
    }) => {

    const [mapHeight, setMapHeight] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (circle && showMarker) {
            setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
            blink();
        }
    }, []);

    const onRegionChange = region => {
        if (!map.destination.details) {
            SetMarkerPosition(region)
        }
    };

    const mapZoom = zoom ? zoom : {
        latitudeDelta: 0.005,
        longitudeDelta: 0.001,
    };

    const blink = () => {
        opacity.setValue(1);
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start(() => blink());
    };

    return (
        <MapScreenView
            opacity={opacity}
            children={children}
            minutes={minutes}
            onRegionChange={onRegionChange}
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
            map={map}
            drivers={drivers}
            setMapRef={setMapRef}
            mapRef={mapRef}
            showMarker={showMarker}
            mapStyles={mapStyles}
            SetDestinationDetails={SetDestinationDetails}
            circle={circle}
            initialRegion={{
                ...(showMarker ? map.currentLocation.coords : map.marker),
                ...mapZoom,
            }}
        />
    );
};

export default MapScreenController;
