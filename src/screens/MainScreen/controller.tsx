import React, { PureComponent } from 'react';
import firebase from '@react-native-firebase/messaging';
import MapView from 'react-native-maps';
import MainScreenView from './view';
import { Props } from './connect';
import { ROUTES } from '@constants/ROUTES';
import OrderStatus from '@constants/orderStatus';

class MainScreenController extends PureComponent<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      mapRef: null,
    };
  }

  componentDidUpdate() {
    if (this.props.currentBooking?.status === OrderStatus.CANCELED) {
      this.props.removeBooking();
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

  render() {
    return (
      <MainScreenView
        goToSelectCar={this.goToSelectCar}
        setMapRef={this.setMapRef}
        mapRef={this.state.mapRef}
        addressText={this.props.currentLocationInfo?.name}
      />
    );
  }
}

export default MainScreenController;
