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
var index_style_1 = __importDefault(require("./index.style"));
var FormLayout = /** @class */ (function (_super) {
    __extends(FormLayout, _super);
    function FormLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormLayout.prototype.render = function () {
        var _a = this.props, mode = _a.mode, label = _a.label, children = _a.children, layoutStyle = _a.layoutStyle, labelStyle = _a.labelStyle, componentStyle = _a.componentStyle;
        return (react_1.default.createElement(react_native_1.View, { style: [index_style_1.default[mode + "FromLayoutWrap"]].concat(layoutStyle) },
            label ? react_1.default.createElement(react_native_1.Text, { style: [index_style_1.default[mode + "FormLabel"]].concat(labelStyle) },
                label,
                ':') : null,
            react_1.default.createElement(react_native_1.View, { style: [index_style_1.default.formComponent, index_style_1.default.verticalFormComponent].concat(componentStyle) }, children)));
    };
    FormLayout.defaultProps = {
        mode: 'inline'
    };
    return FormLayout;
}(react_1.default.PureComponent));
exports.default = FormLayout;
