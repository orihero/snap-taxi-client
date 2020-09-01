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
        width: 40,
        height: 40,
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
        height: 18,
    }
});
