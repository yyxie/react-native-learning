"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_style_1 = __importDefault(require("./index.style"));
function default_1(props) {
    var _a = props.emptyImg, emptyImg = _a === void 0 ? require('./image/empty-img.png') : _a, _b = props.emptyTitle, emptyTitle = _b === void 0 ? '暂无相关记录' : _b;
    return (react_1.default.createElement(react_native_1.View, { style: index_style_1.default.emptyWrap },
        react_1.default.createElement(react_native_1.Image, { style: index_style_1.default.emptyImg, source: emptyImg }),
        react_1.default.createElement(react_native_1.Text, { style: index_style_1.default.emptyTitle }, emptyTitle)));
}
exports.default = default_1;
