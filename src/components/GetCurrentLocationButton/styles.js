import {StyleSheet} from "react-native"
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    getCurrentLocation: {
        borderRadius: 100,
        width: 45,
        height: 45,
        position: 'absolute',
        right: 0,
        top: -80,
        overflow: "hidden",
        elevation: 5,
    },
    circleIcon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2.7,
        borderRadius: 100,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
    },
})
