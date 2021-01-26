import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";
import Screen from "../../helpers/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    content: {
        overflow: 'hidden',
        paddingTop: 25.7,
        paddingBottom: 26,
        flex: 1,
        marginHorizontal: 18,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderColor: '#fff',
        marginVertical: Screen.height > 700 ? 40 : 20,
        borderRadius: 15
    },
    icon: {
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        zIndex: 999,
        right: 15.7,
        top: 16.7,
        borderRadius: 100,
    }
});
