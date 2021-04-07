import { StyleSheet } from 'react-native';
import Colors from '../../assets/styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  inputWrapper: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  input: {
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 0,
  },
  mapTextWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  delete: {
    marginLeft: 'auto',
    marginBottom: 20,
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
