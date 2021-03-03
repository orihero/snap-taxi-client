import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../../assets/images/GradientBackground';
import { localization } from '../../services/Localization';
import MenuIcon from '@assets/images/MenuIcon';
import Colors from '../../assets/styles/Colors';
import { Bold, SemiBold } from '../Layout/AppText';
import BackButtonIcon from '../../assets/images/BackButtonIcon';
import TouchablePlatformSpecific from '../TouchablePlatformSpecific';
import { RootState } from '@store/models';

const Header = ({
  goBack,
  profile,
  subText,
  current,
  gradient = true,
  ...rest
}: any) => {
  const navigation = useNavigation<any>();

  const renderTime = () => {
    let time = new Date().getHours();
    if (time > 0 && time <= 12) {
      return localization.goodMorning;
    } else if (time > 12 && time <= 18) {
      return localization.goodDay;
    } else {
      return localization.goodEvening;
    }
  };

  return (
    <>
      {gradient && <GradientBackground style={styles.gradient} />}
      <View style={styles.container} {...rest}>
        {!goBack ? (
          <TouchableOpacity
            disabled={current}
            onPress={() => navigation.openDrawer()}>
            {!current && <MenuIcon />}
          </TouchableOpacity>
        ) : (
          <TouchablePlatformSpecific
            onPress={() => navigation.goBack()}
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}>
            <BackButtonIcon style={{ elevation: 10 }} />
          </TouchablePlatformSpecific>
        )}
        <View style={{ alignItems: 'center' }}>
          <View style={styles.greeting}>
            <SemiBold style={styles.goodMorning}>{renderTime()}</SemiBold>
            <Bold
              style={{
                color: Colors.blue,
                fontSize: 16,
              }}>
              {profile.name ?? localization.user}
            </Bold>
          </View>
          <Bold style={styles.where}>{subText}</Bold>
        </View>
        <View
          style={{
            borderRadius: 100,
            overflow: 'hidden',
            elevation: 5,
          }}
        />
      </View>
    </>
  );
};

const mapState = ({ user: { profile }, booking: { current } }: RootState) => ({
  profile,
  current,
});

export default connect(mapState)(Header);
