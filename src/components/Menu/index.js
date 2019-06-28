"use strict";
/**
 * @fileOverview 菜单
 * @author 解园园
 * @time 2019-06-28
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_style_1 = __importDefault(require("./index.style"));
var Menu = function (props) {
    var onMenuClick = props.onMenuClick, menuIcon = props.menuIcon, title = props.title;
    return (react_1.default.createElement(react_native_1.View, { style: index_style_1.default.menuItem, onStartShouldSetResponder: onMenuClick },
        react_1.default.createElement(react_native_1.Image, { style: index_style_1.default.menuIcon, source: menuIcon }),
        react_1.default.createElement(react_native_1.View, { style: index_style_1.default.menuContent },
            react_1.default.createElement(react_native_1.Text, { style: index_style_1.default.flex }, title),
            react_1.default.createElement(react_native_1.Image, { style: index_style_1.default.menuArrow, source: require('../../assets/icons/icon-arrow-right.png') }))));
};
exports.default = Menu;
