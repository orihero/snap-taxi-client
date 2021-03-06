import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import styles from './styles';
import { Bold } from '../Layout/AppText';
import Lightning from '../../assets/images/Lightning';
import Common from '../../assets/styles/Common';
import Colors from '../../assets/styles/Colors';

interface IProps {
  active?: boolean;
  title?: string;
  price?: number;
  onPress?: () => void;
  inflated?: boolean;
  isLoading?: boolean;
  image?: string;
}

const CarItem = ({
  active,
  title,
  price,
  onPress,
  inflated,
  isLoading,
  image,
}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!isLoading}>
      <View style={[styles.planItem, active && styles.activeContainerStyle]}>
        <View style={{ marginTop: 6 }}>
          {isLoading ? (
            <Text
              numberOfLines={1}
              style={[
                Common.bold,
                { color: Colors.text },
                [styles.text, { fontSize: 12 }, active && styles.activeText],
              ]}>
              {title}
            </Text>
          ) : (
            <Placeholder Animation={Fade} style={{ width: 50 }}>
              <PlaceholderLine />
            </Placeholder>
          )}
          <View style={styles.row}>
            {inflated && (
              <View style={{ marginLeft: -5, marginRight: 1 }}>
                <Lightning />
              </View>
            )}
            {isLoading ? (
              <Bold style={[styles.text, active && styles.activeText]}>
                от {price}
              </Bold>
            ) : (
              <Placeholder Animation={Fade} style={{ width: 30 }}>
                <PlaceholderLine />
              </Placeholder>
            )}
          </View>
        </View>
        <Image style={styles.img} source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;
