import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
  },
});
