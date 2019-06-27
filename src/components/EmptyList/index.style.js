"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
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
        color: '#333',
        fontSize: 14
    }
});
