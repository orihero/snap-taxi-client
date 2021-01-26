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
        fontSize: 15.5 ,
    },
    circle: {
        width: 8,
        height: 8,
        backgroundColor: Colors.blue,
        borderRadius: 100
    },
    addressCircle: {
        width: 13,
        height: 13,
        backgroundColor: Colors.blue,
        borderRadius: 100,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 100,
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
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    redColor: {
        backgroundColor: '#ff4444'
    }
});
