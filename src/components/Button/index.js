"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
// @ts-ignore
var index_style_1 = __importDefault(require("./index.style"));
var ButtonCustom = /** @class */ (function (_super) {
    __extends(ButtonCustom, _super);
    function ButtonCustom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @ts-ignore
        _this.onPress = function () {
            var _a = _this.props, onPress = _a.onPress, disabled = _a.disabled;
            if (disabled) {
                return false;
            }
            onPress && onPress();
        };
        return _this;
    }
    ButtonCustom.prototype.render = function () {
        var _a = this.props, children = _a.children, type = _a.type, disabled = _a.disabled;
        return (react_1.default.createElement(react_native_1.TouchableHighlight, { activeOpacity: 1, style: [index_style_1.default.commonWrap, index_style_1.default[type + "Wrap"], disabled ? index_style_1.default.disabled : {}], onPress: this.onPress },
            react_1.default.createElement(react_native_1.Text, { style: [index_style_1.default.commonText, index_style_1.default[type + "Text"]] }, children)));
    };
    ButtonCustom.defaultProps = {
        type: 'primary',
    };
    return ButtonCustom;
}(react_1.default.Component));
exports.default = ButtonCustom;
