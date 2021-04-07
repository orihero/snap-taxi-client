import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from '@components/Button';
import { localization } from '../../../../services/Localization';
import { SemiBold } from '@components/Layout/AppText';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';

interface IProps {
  addressInfo: any;
  isLoading: boolean;
  finish: () => void;
}

const SelectLocationPanelView = ({
  finish,
  isLoading,
  addressInfo,
}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.destWrapper}>
        <View style={[styles.addressCircle]}>
          <View style={styles.innerCircle} />
        </View>
        {isLoading ? (
          <Placeholder
            Animation={Fade}
            style={{ width: 200, height: 30, top: 10 }}>
            <PlaceholderLine />
          </Placeholder>
        ) : (
          <SemiBold style={{ fontSize: 18 }}>
            {addressInfo?.name ?? 'Куда едем?'}
          </SemiBold>
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          isLoading={isLoading}
          title={localization.done}
          onPress={finish}
        />
      </View>
    </View>
  );
};

export default SelectLocationPanelView;
