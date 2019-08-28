/**
 * @fileOverview: **
 * @author: 解园园
 * Date: 2019-08-22
 * Time: 10:45
 */
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    modalWrapCommon: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    modalMaskWrap: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
    },
    modalMask: {
        backgroundColor: '#000',
        opacity: 0.5
    },
    modalContainer: {
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    modalContainerLeft: {
        height: '100%',
        width: 200,
    },
    modalContainerRight: {
        height: '100%',
        width: 200,
    },
    modalContainerTop: {
        width: '100%',
        height: 200
    },
    modalContainerDown: {
        width: '100%',
        height: 200
    },
    delBtn: {
        position: 'absolute',
        bottom: -50,
        left: '50%',
        marginLeft: -10,
        width: 20,
        height: 20,
    }
});
