import { Dimensions, StyleSheet } from 'react-native';
import Colors from '@assets/styles/Colors';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    backgroundColor: Colors.background,
    marginTop: 'auto',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingBottom: 23,
    paddingTop: 13,
    borderWidth: 2,
    borderColor: '#fff',
    borderTopWidth: 0,
  },
  column: {
    width: '48.5%',
  },
  findCar: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
  },
  additional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 20,
  },
  plan: {
    marginBottom: 24,
    paddingLeft: 13,
  },
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: 10,
  },
  selectDest: {
    paddingTop: 0,
    paddingHorizontal: 13,
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
  },
  destWrapper: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressCircle: {
    width: 15,
    height: 15,
    backgroundColor: Colors.blue,
    borderRadius: 100,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 8,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});
