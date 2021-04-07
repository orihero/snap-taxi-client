import { StyleSheet } from 'react-native';
import Colors from '@assets/styles/Colors';

export default StyleSheet.create({
  addressItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 20,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
