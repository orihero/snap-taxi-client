import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 30,
    },
    phone: {
        borderRadius: 10,
        height: 52,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        elevation: 5,
        marginBottom: 40,
        borderWidth: 2,
        borderColor: '#fff'
    },
    phoneIcon: {
        marginLeft: 18,
        marginRight: 15.73
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
        elevation: 5,
        borderRadius: 10,
        height: 52,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderColor: '#fff'
    }
});
