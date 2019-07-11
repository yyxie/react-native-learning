import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    inlineFromLayoutWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    inlineFormLabel: {
        fontSize: 15,
        paddingRight: 5,
        lineHeight: 38,
    },
    formComponent: {
        flex: 1,
        height: 38,
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E1E1E1',
        borderRadius: 2,
    },
    verticalFromLayoutWrap: {
        height: 76,
        marginTop: 18
    },
    verticalFormLabel: {
        fontSize: 15,
        paddingRight: 5,
        lineHeight: 38,
    },
    verticalFormComponent: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 38,
    },
});
