import { StyleSheet } from 'react-native';
import Screen from '../../helpers/Dimensions';
import Colors from '@assets/styles/Colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  btn: {},
  title: {
    marginLeft: 40,
    flex: 1,
    fontSize: 16,
  },
  selected: {
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textColor: {
    color: '#aaaeb7',
  },
  directionText: {
    fontSize: Screen.width > 400 ? 15 : 13,
  },
  input: {
    padding: 0,
    width: '90%',
    backgroundColor: Colors.background,
    height: 50,
    paddingLeft: 15,
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: Colors.blue,
    borderRadius: 100,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 3,
  },
  smallCircle: {
    width: 3,
    height: 3,
    backgroundColor: '#B6C5EE',
    borderRadius: 100,
  },
  flatList: {
    paddingHorizontal: 15,
  },
  address: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 10,
    marginBottom: 10,
  },
  addressName: {
    fontSize: 18,
  },
  addressDescription: {
    fontSize: 14,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  map: {
    position: 'absolute',
    right: 25,
  },
});
