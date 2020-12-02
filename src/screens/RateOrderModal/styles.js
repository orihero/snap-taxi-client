import {StyleSheet} from "react-native";
import Colors from "../../assets/styles/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: Colors.background,
    },
    shadow: {
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    content: {
        paddingHorizontal: 15,
        paddingBottom: 30,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10
    },
    subHeading: {
        textAlign: 'center',
        color: '#646974',
        marginBottom: 23.6
    },
    startContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 19.6,
        marginBottom: 16,
        borderBottomColor: '#EAECF1',
        borderBottomWidth: 1
    },
    textarea: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: Colors.background,
        height: 126,
        marginBottom: 46
    },
    topNavigation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    icon: {
        position: 'absolute',
        left: 0
    },
    topText: {
        alignItems: 'center',
        textAlign: 'center'
    },
    markWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    detailsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 46
    }
});
