import {StyleSheet} from "react-native";
import Screen from "../../helpers/Dimensions";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 20
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20
    },
    btn: {},
    title: {
        marginLeft: 40,
        flex: 1,
        fontSize: 16
    },
    selected: {
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
    input: {
        padding: 10,
        width: '100%',
        backgroundColor: Colors.background
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

