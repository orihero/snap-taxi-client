import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        zIndex: 0,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
    },
    greeting: {
        flexDirection: 'row',
    },
    watcher: {
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: 100,
        backgroundColor: '#fff',
        borderColor: '#fff'
    },
    where: {
        color: '#232323',
        fontSize: 17,
        lineHeight: 22
    },
    gradient: {
        position: 'absolute',
        alignSelf: 'center'
    },
    goodMorning: {
        color: '#232323',
        marginRight: 6
    }
});
