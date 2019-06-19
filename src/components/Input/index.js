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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileOverview 输入框- 支持clear按钮以及历史记录
 * @author 解园园
 * @time 2019-05
 */
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
// @ts-ignore
var style_1 = __importDefault(require("./style"));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        /**
         * 内容change
         * @param val 值
         */
        _this.onChange = function (value) {
            _this.setState({
                value: value
            });
            _this.props.onChange && _this.props.onChange(value);
        };
        /**
         * 清空内容
         */
        _this.clear = function () {
            _this.setState({
                value: ''
            });
            _this.props.onChange && _this.props.onChange('');
        };
        /**
         * 选中历史项
         * @param item
         */
        _this.historyItemPress = function (text) {
            _this.setState({
                value: text,
            });
            _this.props.onChange && _this.props.onChange(text);
            _this.props.historyItemPress && _this.props.historyItemPress(text);
        };
        /**
         * 渲染历史记录下拉
         * @param item 当前项
         * @param i 当前下标
         * @returns {*}
         */
        _this.renderHistory = function (itemObj) {
            var item = itemObj.item;
            var renderHistory = _this.props.renderHistory;
            if (renderHistory) {
                return renderHistory(itemObj);
            }
            return (react_1.default.createElement(react_native_1.TouchableHighlight, { key: item, onPress: _this.historyItemPress.bind(_this, item), underlayColor: "transparent" },
                react_1.default.createElement(react_native_1.Text, { style: style_1.default.autoCompleteListItemStyle }, item)));
        };
        var value = '';
        if (props.value === undefined) { //只有当value没有传的情况下才会从defaultValue中取值
            value = props.defaultValue === undefined ? '' : props.defaultValue;
        }
        else {
            value = props.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    Input.getDerivedStateFromProps = function (nextProps, prevState) {
        // 当传入的value发生变化的时候，更新state
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            return {
                value: nextProps.value,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    };
    Input.prototype.render = function () {
        var value = this.state.value;
        var _a = this.props, isShowClear = _a.isShowClear, defaultValue = _a.defaultValue, placeholder = _a.placeholder, historyList = _a.historyList, inputStyle = _a.inputStyle, inputWrapStyle = _a.inputWrapStyle, wrapAllStyle = _a.wrapAllStyle, clearIcon = _a.clearIcon, others = __rest(_a, ["isShowClear", "defaultValue", "placeholder", "historyList", "inputStyle", "inputWrapStyle", "wrapAllStyle", "clearIcon"]);
        return (react_1.default.createElement(react_native_1.View, { style: [{
                    position: 'relative'
                }, wrapAllStyle] },
            react_1.default.createElement(react_native_1.View, { style: [style_1.default.textInputWrapper, inputWrapStyle] },
                react_1.default.createElement(react_native_1.TextInput, __assign({ style: [style_1.default.textInputStyle, inputStyle], onChangeText: this.onChange, value: value, defaultValue: defaultValue, editable: true, placeholder: placeholder, returnKeyType: 'done', underlineColorAndroid: 'transparent', onSubmitEditing: react_native_1.Keyboard.dismiss }, others)),
                isShowClear && value !== '' && (react_1.default.createElement(react_native_1.TouchableHighlight, { onPress: this.clear, underlayColor: "transparent" },
                    react_1.default.createElement(react_native_1.Image, { style: style_1.default.menuArrow, source: clearIcon })))),
            react_1.default.createElement(react_native_1.FlatList, { style: style_1.default.autoCompleteWrap, data: historyList, renderItem: this.renderHistory })));
    };
    // prop默认值
    Input.defaultProps = {
        placeholder: '请输入',
        isShowClear: false,
        clearIcon: require('./icon/icon-clear.png')
    };
    return Input;
}(react_1.PureComponent));
exports.default = Input;
