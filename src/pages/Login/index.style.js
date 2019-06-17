import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flex: {
        flex: 1,
        /* alignItems: 'center',
        justifyContent: 'center' */
    },

    loginWrap: {
        width: '100%',
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    loginInner: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    titleWrap: {},
    mainTitle: {
        textAlign: 'left',
        fontSize: 25,
        color: '#484848',
        lineHeight: 35,
        marginTop: 50,
        fontWeight: 'bold'
    },
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
        marginTop: 24,
        lineHeight: 36,
        fontSize: 26,
        color: '#909090',
    },
    blueTxt: {
        color: '#008CFF',
    },
    button: {
        marginTop: 50,
    },
    loginForm: {
        width: '100%',
        marginTop: 56,
    },
    inputWrap: {
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        borderColor: '#F3F3F3',
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    input: {
        borderWidth: 0,
        paddingLeft: 0
    },
    autoCompleteWrap: {
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    autoCompleteListStyle: {
        backgroundColor: '#fff',
        borderWidth: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        marginTop: 0,
    },
    listContainerStyle: {
        borderTopWidth: 0,
        borderColor: '#EEF0F5',
    },
    autoCompleteListItemStyle: {
        zIndex: 1,
        marginStart: 4,
        marginEnd: 4,
        paddingVertical: 9,
        borderBottomWidth: 1,
        borderColor: '#EEF0F5',
        backgroundColor: '#fff',
    }
});
