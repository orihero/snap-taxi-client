import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SelectCarScreenController from './controller';
import booking from '../../store/actions/booking';
import rates from '../../store/actions/rates';
import {
  GetCurrentLocation,
  SetCurrentLocationDetails,
  SetMarkerPosition,
} from '../../store/constants/map';
import { ChangeOrderStatus } from '../../store/constants/booking';

const mapStateToProps = ({
  rates,
  map: { destination, marker },
  booking: { order, drivers },
  regions: { id },
}) => ({
  rates,
  destination,
  marker,
  order: order.data,
  drivers,
  regionId: id,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      BookCar: booking.BookCar,
      GetRates: rates.GetRates,
      CancelOrder: booking.CancelOrder,
      GetCarsAround: booking.GetDriversAround,
      GetCurrentLocation: (payload) => ({
        type: GetCurrentLocation.SUCCESS,
        payload,
      }),
      ChangeOrderStatus: (payload) => ({
        type: ChangeOrderStatus.SUCCESS,
        payload,
      }),
      SetMarkerPosition: (payload) => ({
        type: SetMarkerPosition.SUCCESS,
        payload,
      }),
      GetOrderInfo: booking.GetOrderInfo,
      SetCurrentLocationDetails: (payload) => ({
        type: SetCurrentLocationDetails.SUCCESS,
        payload,
      }),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectCarScreenController);
