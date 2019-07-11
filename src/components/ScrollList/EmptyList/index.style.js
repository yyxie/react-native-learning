import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    emptyWrap: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    emptyTitle: {
        padding: 10,
        color: '#636368',
        fontSize: 14
    }
});
