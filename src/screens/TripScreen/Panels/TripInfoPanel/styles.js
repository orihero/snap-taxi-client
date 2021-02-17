import {StyleSheet} from "react-native";
import Colors from "../../../../assets/styles/Colors";
import Screen from "../../../../helpers/Dimensions";

export default StyleSheet.create({
    shadow: {
        width: Screen.width - 32,
        elevation: 10,
        alignSelf: 'center',
        marginBottom: 12,
        borderRadius: 15,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.background,
        paddingBottom: 23,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0,
    },
    draggable: {
        width: 40,
        height: 4,
        alignSelf: 'center',
        backgroundColor: '#2A2E43',
        opacity: .23,
        borderRadius: 100,
        marginTop: 15
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 11,
        borderBottomWidth: 1,
        borderBottomColor: '#EAECF1',
        paddingTop: 5
    },
    tripFee: {
        fontSize: 17,
        marginLeft: 'auto'
    }
});
