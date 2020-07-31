import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    circleIcon: {
        position: 'absolute',
        right: 0,
        top: -55,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2.7,
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
    },
});
