import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2,
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: Colors.border
    },
    chatIcon: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        bottom: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        elevation: 5
    }
});
