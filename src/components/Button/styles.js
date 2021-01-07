import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 10,
        marginTop: 'auto',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: Colors.yellow,
        width: '100%',
    },
    wrapper: {
		flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
