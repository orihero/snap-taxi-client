import React from 'react';
import MyAddressesScreen from '../../screens/MyAddressesScreen';
import PageHeader from '@components/PageHeader/PageHeader';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../assets/styles/Colors';
import { localization } from '../../services/Localization';
import AddAddressScreen from '../../screens/AddAddressScreen';
import { SaveAddressMapScreen } from '../../screens/SaveAddressMap';
import { ROUTES } from '@constants/ROUTES';

const { Navigator, Screen } = createStackNavigator();

const MyAddressesStack = () => (
  <Navigator>
    <Screen
      name={ROUTES.MY_ADDRESSES}
      component={MyAddressesScreen}
      options={{
        header: (props) => (
          <PageHeader
            title={localization.myAddresses}
            style={{ marginBottom: 0 }}
            {...props}
          />
        ),
        cardStyle: { backgroundColor: Colors.background },
      }}
    />
    <Screen
      name={ROUTES.ADD_ADDRESS}
      component={AddAddressScreen}
      options={{
        header: (props) => (
          <PageHeader title={localization.addAddress} {...props} />
        ),
        cardStyle: { backgroundColor: Colors.background },
      }}
    />
    <Screen
      name={ROUTES.SELECT_ADDRESS_MAP}
      component={SaveAddressMapScreen}
      options={{
        header: (props) => (
          <PageHeader
            title={localization.addAddress}
            {...props}
            style={{ marginBottom: 0 }}
          />
        ),
        cardStyle: { backgroundColor: Colors.background },
      }}
    />
  </Navigator>
);

export default MyAddressesStack;
