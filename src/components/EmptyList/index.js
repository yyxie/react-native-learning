"use strict";
/**
 * @fileOverview 空列表组件
 * @time 2019/06/28
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_style_1 = __importDefault(require("./index.style"));
function default_1(props) {
    var _a = props.emptyImg, emptyImg = _a === void 0 ? require('./image/icon-empty.png') : _a, _b = props.emptyTitle, emptyTitle = _b === void 0 ? '~暂无相关记录~' : _b, _c = props.flatListHeight, flatListHeight = _c === void 0 ? 0 : _c;
    if (flatListHeight) {
        return (react_1.default.createElement(react_native_1.View, { style: __assign({}, index_style_1.default.emptyWrap, { height: flatListHeight }) },
            react_1.default.createElement(react_native_1.Image, { style: index_style_1.default.emptyImg, source: emptyImg }),
            react_1.default.createElement(react_native_1.Text, { style: index_style_1.default.emptyTitle }, emptyTitle)));
    }
    return null;
}
exports.default = default_1;
