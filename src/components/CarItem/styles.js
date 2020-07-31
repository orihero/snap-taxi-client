import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    planItem: {
        width: 100,
        height: 70,
        backgroundColor: "#F2F2F2",
        marginRight: 10,
        borderRadius: 15,
        paddingLeft: 13,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    text: {
        fontSize: 11,
        lineHeight: 15
    },
    img: {
        position: 'absolute',
        right: -20,
        bottom: 0,
        transform: [{scale: 0.5}]
    },
    activeContainerStyle: {
        backgroundColor: Colors.blue
    },
    activeText: {
        color: '#fff'
    },
    info: {
        position: 'absolute',
        right: 4.4,
        top: 3.4
    }
});