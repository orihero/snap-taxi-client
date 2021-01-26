import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
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
    buttonWrapper: {
        borderRadius: 100,
        width: 45,
        height: 45,
        position: 'absolute',
        right: 0,
        top: -55,
        overflow: "hidden",
        elevation: 5,
    }
});
