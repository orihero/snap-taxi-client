import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        backgroundColor: Colors.background,
        marginTop: 'auto',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 23,
        paddingTop: 13,
        borderWidth: 2,
        borderColor: '#fff',
        borderTopWidth: 0,
    },
    column: {
        width: '48.5%'
    },
    findCar: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 13
    },
    additional: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dot: {
        width: 2,
        height: 2,
        marginLeft: 2,
        backgroundColor: '#000',
        borderRadius: 100
    },
    cardNumber: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginRight: 20
    },
    dots: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    plan: {
        marginBottom: 24,
        paddingLeft: 13
    }
});