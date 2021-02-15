import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { debounce } from 'lodash';
import SelectCarScreenView from './view';
import Geolocation from 'react-native-geolocation-service';
import api from '../../services/api';
import BackgroundTimer from 'react-native-background-timer';

class SelectCarScreenController extends PureComponent {
  constructor(props) {
    super(props);
    const { latitudeDelta, longitudeDelta } = this.props.marker;
    this.state = {
      zoom: {
        latitudeDelta,
        longitudeDelta,
      },
      dest: null,
      isDestSelecting: false,
      timeoutId: null,
      visiblePlanModal: false,
      visibleDestinationModal: false,
      visibleAdditionalModal: false,
      rate: {},
      rateInfo: { 0: true },
      destinationText: '',
      currentLocationText: '',
      comment: null,
      isLoading: false,
      isCanceling: false,
      isOrderSuccess: false,
      airCondition: false,
      mapRef: null,
    };
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    this.props.GetRates(
      {
        distance: 0,
        region_id: this.props.regionId,
        ac_rate: this.state.airCondition ? 1 : 0,
      },
      (data) => {
        this.updateState('rate', data.data[0]);
      },
    );
    const { order } = this.props;
    if (order.id && order.status !== 'canceled') {
      this.setState({
        isOrderSuccess: true,
      });
      this.props.GetOrderInfo(order.id, (data) => {
        this.props.ChangeOrderStatus(data);
        if (data.status !== 'new') {
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Trip' }],
          });
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const marker = this.props.marker;
    const prevMarker = prevProps.marker;
    if (
      prevMarker.latitude !== marker.latitude ||
      prevMarker.longitude !== marker.longitude
    ) {
      debounce(this.geocode, 300)();
    }

    if (this.props.marker.latitudeDelta !== prevProps.marker.latitudeDelta) {
      this.setState({
        zoom: {
          latitudeDelta: this.props.marker.latitudeDelta,
          longitudeDelta: this.props.marker.longitudeDelta,
        },
      });
    }

    if (prevProps.destination !== this.props.destination) {
      if (this.props.destination.data && this.props.destination.details) {
        this.props.GetRates(this.props.destination.details, (data) => {
          this.updateState('rate', data.data[0]);
        });
        this.updateState('destinationText', this.props.destination.data.name);
      } else {
        this.props.GetRates(
          {
            distance: 0,
            region_id: this.props.regionId,
            ac_rate: this.state.airCondition ? 1 : 0,
          },
          (data) => {
            this.updateState('rate', data.data[0]);
          },
        );
      }
    }

    if (this.props.order.status === 'accepted') {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Trip' }],
      });
    }

    if (prevState.airCondition !== this.state.airCondition) {
      this.props.GetRates(
        {
          distance: 0,
          region_id: this.props.regionId,
          ac_rate: this.state.airCondition ? 1 : 0,
        },
        (data) => {
          this.updateState('rate', data.data[0]);
        },
      );
    }
  }

  componentWillUnmount() {
    this.clearCancelTimeout();
  }

  clearCancelTimeout = () => {
    BackgroundTimer.clearTimeout(this.state.timeoutId);
    this.setState({
      timeoutId: null,
    });
  };

  geocode = () => {
    const { latitude, longitude } = this.props.marker;
    if (!this.state.isDestSelecting) {
      this.props.GetRates(
        {
          region_id: this.props.regionId,
          ac_rate: this.state.airCondition ? 1 : 0,
        },
        (data) => {
          this.updateState('rate', data.data[0]);
        },
      );
      this.props.GetCarsAround({ latitude, longitude });
      api.request
        .get(
          `https://geocode-maps.yandex.ru/1.x?apikey=aeed4c01-79da-458a-8b02-93e6b30ed33c&geocode=${longitude},${latitude}&format=json`,
        )
        .then((res) => {
          const obj =
            res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
          this.props.SetCurrentLocationDetails(obj);
          this.updateState('currentLocationText', obj.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  findCar = () => {
    const {
      destination,
      marker: { latitude, longitude },
      BookCar,
      ChangeOrderStatus,
    } = this.props;

    const {
      airCondition,
      currentLocationText,
      destinationText,
      rate,
      comment,
      mapRef,
      zoom,
    } = this.state;

    const routes = [];
    const option_ids = [];
    if (airCondition) {
      option_ids.push(4);
    }

    this.updateState('isLoading', true);
    if (destination.data) {
      routes.push(
        {
          address: currentLocationText,
          lat: `${latitude}`,
          lng: `${longitude}`,
          order: 0,
        },
        {
          address: destinationText,
          lat: `${destination.coords.latitude}`,
          lng: `${destination.coords.longitude}`,
          order: 1,
        },
      );
    } else {
      routes.push({
        address: currentLocationText,
        lat: `${latitude}`,
        lng: `${longitude}`,
        order: 0,
      });
    }

    BookCar(
      {
        routes,
        option_ids,
        distance: destination.details
          ? `${Math.ceil(destination.details.distance * 10) / 10}`
          : '0',
        rate_id: rate.id,
        comment,
        region_id: this.props.regionId,
        ac_rate: this.state.airCondition ? 1 : 0,
      },
      {
        socketCb: (data) => {
          ChangeOrderStatus(data);
          this.updateState('isLoading', false);
          this.updateState('isOrderSuccess', false);
        },
        actionCb: () => {
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Trip' }],
          });
        },
        successCb: (data) => {
          const tID = BackgroundTimer.setTimeout(this.absoluteCancel, 120000);
          this.updateState('timeoutId', tID);
          mapRef.animateToRegion(
            {
              latitude,
              longitude,
              latitudeDelta: zoom.latitudeDelta * 1.5,
              longitudeDelta: zoom.longitudeDelta * 1.5,
            },
            5000,
          );
          this.setState();
          this.updateState('isOrderSuccess', true);
        },
      },
      () => {
        this.updateState('isLoading', false);
      },
    );
  };

  absoluteCancel = () => {
    Alert.alert(
      'Внимание',
      'Уважаемый клиент в ближайшие время нет свободных машин, попробуйте  заказать по другому тарифу.',
    );
    this.props.CancelOrder(
      {
        orderId: this.props.order.id,
      },
      () => {
        this.updateState('isLoading', false);
        this.updateState('isOrderSuccess', false);
      },
    );
  };

  cancelOrder = () => {
    this.clearCancelTimeout();
    const {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    } = this.props.marker;
    return Alert.alert(
      'Отмена заказа',
      'Вы действительно хотите отменить заказ ?',
      [
        {
          text: 'Да',
          onPress: () => {
            this.state.mapRef.animateToRegion(
              {
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta,
              },
              300,
            );
            this.updateState('isCanceling', true);
            this.props.CancelOrder(
              {
                orderId: this.props.order.id,
              },
              () => {
                this.updateState('isCanceling', false);
                this.updateState('isLoading', false);
                this.updateState('isOrderSuccess', false);
              },
              () => {
                this.updateState('isCanceling', false);
              },
            );
          },
        },
        {
          text: 'Нет',
        },
      ],
    );
  };

  getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (data) => {
        this.props.GetCurrentLocation(data.coords);
        if (this.state.mapRef) {
          this.state.mapRef.animateToRegion({
            ...data.coords,
            ...this.state.mapZoom,
          });
        }
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  render() {
    let { rates, destination, drivers } = this.props;

    return (
      <SelectCarScreenView
        destinationName={destination.data && destination.data.name}
        rates={rates}
        findCar={this.findCar}
        cancelOrder={this.cancelOrder}
        getCurrentLocation={this.getCurrentLocation}
        drivers={drivers}
        updateState={this.updateState}
        state={this.state}
      />
    );
  }
}

export default SelectCarScreenController;
