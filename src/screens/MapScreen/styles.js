import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    overlay: {
        zIndex: 999,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        top: Screen.height / 2 - 58,
    },
    circle: {
        width: 60,
        height: 60,
        backgroundColor: '#323637',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stick: {
        width: 2,
        backgroundColor: '#323637',
        height: 30,
    },
    cc: {
        width: 15,
        height: 15,
        borderRadius: 100,
        backgroundColor: '#fff'
    },
    marker: {
        resizeMode: 'contain',
        width: 35,
        height: 35,
    },
});
