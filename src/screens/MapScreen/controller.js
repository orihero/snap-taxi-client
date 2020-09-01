import React, {useState, useEffect, useRef} from 'react';
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
    }) => {

    const [mapHeight, setMapHeight] = useState(0);

    const onRegionChange = region => {
        if (!map.destination.details) {
            SetMarkerPosition(region)
        }
    };

    return (
        <MapScreenView
            onRegionChange={onRegionChange}
            mapHeight={mapHeight}
            setMapHeight={setMapHeight}
            map={map}
            setMapRef={setMapRef}
            mapRef={mapRef}
            mapStyles={mapStyles}
            SetDestinationDetails={SetDestinationDetails}
            initialRegion={{
                ...(showMarker ? map.currentLocation.coords : map.marker),
                latitudeDelta: 0.01,
                longitudeDelta: 0.001,
            }}
        />
    );
};

export default MapScreenController;
