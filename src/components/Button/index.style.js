"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    commonWrap: {
        width: '100%',
        height: 42,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commonText: {
        color: '#fff',
        fontSize: 17,
    },
    primaryWrap: {
        backgroundColor: '#4698ee',
    },
    primaryText: {},
    disabled: {
        backgroundColor: '#E3E3E3',
        color: '#fff'
    }
});
