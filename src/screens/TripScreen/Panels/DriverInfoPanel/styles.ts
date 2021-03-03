import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/styles/Colors';
import Screen from '../../../../helpers/Dimensions';

export default StyleSheet.create({
  shadow: {
    width: Screen.width - 32,
    elevation: 10,
    alignSelf: 'center',
    marginBottom: 12,
    borderRadius: 15,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: Colors.background,
    paddingBottom: 23,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderTopWidth: 0,
  },
  fee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 11,
    paddingTop: 5,
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 100,
    elevation: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    width: '48.5%',
  },
  draggable: {
    width: 40,
    height: 4,
    alignSelf: 'center',
    backgroundColor: '#2A2E43',
    opacity: 0.23,
    borderRadius: 100,
    marginTop: 6,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 8,
  },
  destinationWrapper: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EAECF1',
    marginBottom: 13,
  },
  switch: {
    paddingVertical: 0,
    paddingBottom: 13.4,
    borderBottomWidth: 0,
  },
});
