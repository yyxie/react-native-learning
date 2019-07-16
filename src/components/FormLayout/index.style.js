import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    inlineFromLayoutWrap: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'flex-start'
    },
    inlineFormLabel: {
        fontSize: 15,
        paddingRight: 5,
        paddingVertical: 5
    },
    inlineFormComponentWrap: {
        flex: 1,
    },
    formComponent: {
        width: '100%',
        paddingVertical: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E1E1E1',
        borderRadius: 2,
        marginBottom: 5,
    },
    verticalFromLayoutWrap: {
        marginTop: 18,
        paddingHorizontal: 5,
    },
    verticalFormLabel: {
        fontSize: 15,
        paddingRight: 5,
        paddingVertical: 5,
    },
    verticalFormComponent: {
    // paddingVertical: 5,
    },
    verticalFormComponentWrap: {},
    help: {
        color: 'red',
        textAlign: 'left',
        width: '100%',
        paddingVertical: 5,
    }
});
