"use strict";
/**
 * @fileOverview 加载更多内容
 * @time 2019/06/28
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    loadMoreWrap: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadMoreTxt: {
        color: '#8E8E8E'
    }
});
function default_1(props) {
    return (react_1.default.createElement(react_native_1.View, { style: styles.loadMoreWrap },
        react_1.default.createElement(react_native_1.Text, { style: styles.loadMoreTxt }, props.loadMoreTxt)));
}
exports.default = default_1;
