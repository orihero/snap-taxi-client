import React, {useState, useEffect, useRef} from 'react';
import {Animated} from "react-native";
import MapScreenView from "./view";
import api from "../../services/api";

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
        circle = true,
        zoom,
        markerPosition = false,
        order,
        SetGoogleMarkerPosition,
    }) => {

    const [mapZoom, setMapZoom] = useState(zoom ? zoom : {
        latitudeDelta: 0.005,
        longitudeDelta: 0.001,
    })

    const [isBlinking, setIsBlinking] = useState(true);
    const [mapHeight, setMapHeight] = useState(0);
    const [minutes, setMinutes] = useState(2);
    const [timeoutId, setTimeoutId] = useState(null);
    const [driverLocation, setDriverLocation] = useState({});
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
        blink();
    }, []);

    useEffect(() => {
        if (!isBlinking) {
            setIsBlinking(true);
            setMinutes([2, 3, 4][Math.floor(Math.random() * 3)]);
            blink()
        }
    }, [map.marker]);


    useEffect(() => {
        if (order.data.status && order.data.status !== 'new' && order.data.status !== 'canceled') {
            const id = setInterval(() => {
                api.request
                    .get(`/car-booking/location/${order.data.id}`)
                    .then(res => {
                        const {lat, lng} = res.data;
                        if (lat && lng) {
                            setDriverLocation({
                                latitude: +lat,
                                longitude: +lng
                            })
                        }
                    })
            }, 10000);
            return () => clearInterval(id);
        }
    }, [order.data.status]);

    const onRegionChange = region => {
        if (!map.destination.details) {
            SetMarkerPosition(region)
        }
    };


    const blink = () => {
        opacity.setValue(1);
        clearTimeout(timeoutId);
        setTimeoutId(() => setTimeout(() => setIsBlinking(false), 2000));
        if (isBlinking) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start(() => blink());
        }
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
            driverLocation={driverLocation}
            showMarker={showMarker}
            mapStyles={mapStyles}
            SetDestinationDetails={SetDestinationDetails}
            circle={(circle && isBlinking)}
            SetGoogleMarkerPosition={SetGoogleMarkerPosition}
            order={order.data}
            routes={order.data.driver ? (typeof order.data.routes === "string" ? JSON.parse(order.data.routes)[0] : order.data.routes[0]) : null}
            initialRegion={{
                ...(markerPosition ? map.marker : map.currentLocation.coords),
                ...mapZoom,
            }}
        />
    );
};

export default MapScreenController;
