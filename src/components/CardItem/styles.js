import {StyleSheet} from "react-native"
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    card: {
        paddingTop: 9,
        paddingBottom: 14.2,
        paddingLeft: 18.7,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 4
    },
    icon: {
        alignSelf: 'center',
        width: 46,
        alignItems: 'center'
    },
    phone: {
        fontSize: 15,
        color: Colors.blue
    },
    cardNumber: {
        marginRight: 10,
        color: Colors.grey,
        fontSize: 15
    }
});
