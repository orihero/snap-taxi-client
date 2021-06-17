import React, { PureComponent } from 'react';
import MapView from 'react-native-maps';
import MainScreenView from './view';
import { Props } from './connect';
import { ROUTES } from '@constants/ROUTES';
import OrderStatus from '@constants/orderStatus';
import { DestinationInfo } from '@store/models/map/types';

class MainScreenController extends PureComponent<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      mapRef: null,
    };
  }

  componentDidMount() {
    const { getList, currentBooking, removeBooking } = this.props;
    getList();

    if (currentBooking && currentBooking.status === OrderStatus.CANCELED) {
      removeBooking();
    }
  }

  setMapRef = (mapRef: MapView) => {
    this.setState({
      mapRef,
    });
  };

  goToSelectCar = () => {
    this.props.navigation.navigate(ROUTES.SELECT_CAR);
  };

  selectDest = (info: DestinationInfo) => {
    this.props.setDestinationInfo(info);
    this.goToSelectCar();
  };

  render() {
    return (
      <MainScreenView
        latestBookings={this.props.latestBookings}
        savedAddresses={this.props.savedAddresses}
        goToSelectCar={this.goToSelectCar}
        setMapRef={this.setMapRef}
        mapRef={this.state.mapRef}
        selectDest={this.selectDest}
        addressText={this.props.currentLocationInfo?.name}
      />
    );
  }
}

export default MainScreenController;
