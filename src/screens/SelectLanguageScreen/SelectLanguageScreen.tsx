import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import RadioButton from '../../components/RadioButton/RadioButton';
import { Bold } from '@components/Layout/AppText';
import { Dispatch, RootState } from '@store/models';

const SelectLanguageScreen = ({ language, changeAppLanguage }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changeAppLanguage('ru')}>
        <View style={styles.row}>
          <Bold style={styles.text}>Русский</Bold>
          <RadioButton selected={language === 'ru'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeAppLanguage('en')}>
        <View style={styles.row}>
          <Bold style={styles.text}>English</Bold>
          <RadioButton selected={language === 'en'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapState = ({ app: { language } }: RootState) => ({
  language,
});

const mapDispatch = ({ app: { changeAppLanguage } }: Dispatch) => ({
  changeAppLanguage,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

type Props = StateProps & DisPatchProps;

export default connect(mapState, mapDispatch)(SelectLanguageScreen);
