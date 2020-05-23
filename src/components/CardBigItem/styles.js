import {StyleSheet} from "react-native"
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        paddingTop: 22,
        paddingBottom: 20,
        paddingLeft: 29,
        backgroundColor: Colors.background,
        borderRadius: 10,
        elevation: 10,
        marginBottom: 20.5
    },
    phone: {
        fontSize: 15,
        color: Colors.grey,
    },
    cardDate: {
        fontSize: 13,
        color: Colors.grey
    },
    cardOwner: {
        fontSize: 15,
        color: Colors.grey
    },
    carDateInfo: {
        fontSize: 15, color:
        Colors.grey
    },
    phoneTitle: {
        fontSize: 13,
        color: Colors.grey
    },
    cardDetails: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
        marginRight: 45
    },
    cardNumber: {
        flexDirection: 'row',
        marginBottom: 13,
        justifyContent: 'space-between',
        marginRight: 30
    },
    cardOwnerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});
