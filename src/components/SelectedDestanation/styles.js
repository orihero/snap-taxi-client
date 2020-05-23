import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        borderRadius: 15,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    textColor: {
        color: '#aaaeb7',
    },
    directionText: {
        fontSize: Screen.width > 400 ? 15 : 13,
    },
    circle: {
        width: 8,
        height: 8,
        backgroundColor: Colors.blue,
        borderRadius: 100
    },
    icons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 3
    },
    smallCircle: {
        width: 3,
        height: 3,
        backgroundColor: '#B6C5EE',
        borderRadius: 100
    }
});
