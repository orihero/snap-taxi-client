import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import routes from '../navigation/DrawerNavigation/routes';
import UserInfo from './UserInfo/UserInfo';
import Colors from '../assets/styles/Colors';
import { Regular } from './Layout/AppText';
import Screen from '../helpers/Dimensions';
import { connect } from 'react-redux';
import { localization } from '../services/Localization';
import { Dispatch, RootState } from '@store/models';
import { ROUTES } from '@constants/ROUTES';

const DrawerContent = (props: Props) => {
  const count = props.notifications.filter((item) => !item.read).length;
  return (
    <View style={styles.container}>
      <UserInfo
        id={props.profile?.user_id}
        name={props.profile?.name}
        phoneNumber={props.profile?.phone}
        avatarImage={props.profile?.avatar}
        updateProfile={props.updateProfile}
      />
      <ScrollView
        style={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}>
        <View>
          {routes.map((route, item) => {
            return (
              route.label && (
                <DrawerItem
                  key={route.label}
                  label={localization.getString(
                    route.label,
                    props.profile?.language,
                  )}
                  name={route.name}
                  count={count}
                  url={route.url}
                  {...props}
                />
              )
            );
          })}
        </View>
        {/*<TouchableWithoutFeedback onPress={logout}>*/}
        {/*    <View style={{alignItems: 'center', marginVertical: 20}}>*/}
        {/*        <View style={styles.icon}>*/}
        {/*            <LogoutIcon/>*/}
        {/*        </View>*/}
        {/*    </View>*/}
        {/*</TouchableWithoutFeedback>*/}
      </ScrollView>
      {/*<Regular style={{position: 'absolute', fontSize: 15, bottom: 10, left: 35}}>Версия 2.0</Regular>*/}
    </View>
  );
};

const DrawerItem = ({ label, name, navigation, count, url }: any) => {
  return (
    <TouchableOpacity
      style={styles.itemStyle}
      onPress={() =>
        !url ? navigation.navigate(name) : Linking.openURL(`tel:+998994722244`)
      }>
      <Regular style={styles.text}>{label}</Regular>
      {name === ROUTES.NOTIFICATIONS && count !== 0 && (
        <Regular style={styles.count}>{count}</Regular>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Screen.height > 700 ? 66 : 20,
    paddingLeft: 14,
    paddingRight: 41,
    flex: 1,
    paddingBottom: 35,
    backgroundColor: Colors.background,
  },
  itemStyle: {
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EAECF1',
    marginBottom: 18,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
  },
  icon: {
    borderRadius: 100,
    backgroundColor: Colors.background,
    elevation: 7,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    width: 20,
    height: 20,
    right: 10,
    borderRadius: 100,
    backgroundColor: Colors.blue,
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

const mapState = ({ user: { profile, notifications } }: RootState) => ({
  profile,
  notifications,
});

const mapDispatch = ({
  app: { setIsRouterLoaded },
  user: { updateProfile },
}: Dispatch) => ({
  updateProfile,
  setIsRouterLoaded,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(DrawerContent);
