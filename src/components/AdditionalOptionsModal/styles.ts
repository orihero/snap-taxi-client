import { StyleSheet } from 'react-native';
import Screen from '../../helpers/Dimensions';

export default StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginBottom: 21.7,
  },
  fz: {
    fontSize: Screen.width > 400 ? 14 : 13,
  },
  heading: {
    fontSize: Screen.width > 400 ? 22 : 18,
    alignSelf: 'center',
    marginBottom: 11,
  },
  comment: {
    flexDirection: 'row',
    marginHorizontal: 6,
    alignItems: 'center',
    paddingVertical: 13,
    borderColor: '#EAECF1',
    borderBottomWidth: 1,
    overflow: 'visible',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
});
