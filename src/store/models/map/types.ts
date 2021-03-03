export type Coords = {
  longitude: number;
  latitude: number;
};

export type Drivers = {
  lng: number;
  lat: number;
  heading: number;
  user: any;
};

export type CurrentLocationInfo = {
  name: string;
};

export type DestinationInfo = {
  name: string;
  Point: {
    pos: string;
  };
  coords: {
    latitude: number;
    longitude: number;
  };
};

export type Polygon = {
  lat: number;
  lng: number;
};

export type Region = {
  id: number;
  title: string;
  polygon: [Polygon[]];
};

export type DriverLocation = {
  lat: number;
  lng: number;
  heading: number;
};

export type InitialState = {
  distance: number;
  regionId: number;
  regions: Region[];
  driversAround: Drivers[];
  isSelectingOnMap: boolean;
  markerInfo: DestinationInfo | null;
  driverLocation: DriverLocation | null;
  destinationInfo: DestinationInfo | null;
  currentLocationInfo: CurrentLocationInfo | null;
};
