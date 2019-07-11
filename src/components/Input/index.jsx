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
/**
 * @fileOverview 输入框- 支持clear按钮以及历史记录
 * @author 解园园
 * @time 2019-05
 */
import React, { PureComponent } from 'react';
import { FlatList, View, TextInput, Image, TouchableHighlight, Text, Keyboard, } from 'react-native';
// @ts-ignore
import styles from './style';
export default class Input extends PureComponent {
    constructor(props) {
        super(props);
        /**
         * 内容change
         * @param val 值
         */
        this.onChange = (value) => {
            this.setState({
                value
            });
            this.props.onChange && this.props.onChange(value);
        };
        /**
         * 清空内容
         */
        this.clear = () => {
            this.setState({
                value: ''
            });
            this.props.onChange && this.props.onChange('');
        };
        /**
         * 选中历史项
         * @param item
         */
        this.historyItemPress = (text) => {
            this.setState({
                value: text,
            });
            this.props.onChange && this.props.onChange(text);
            this.props.historyItemPress && this.props.historyItemPress(text);
        };
        /**
         * 渲染历史记录下拉
         * @param item 当前项
         * @param i 当前下标
         * @returns {*}
         */
        this.renderHistory = (itemObj) => {
            const { item } = itemObj;
            const { renderHistory } = this.props;
            if (renderHistory) {
                return renderHistory(itemObj);
            }
            return (<TouchableHighlight key={item} onPress={this.historyItemPress.bind(this, item)} underlayColor="transparent">
        <Text style={styles.autoCompleteListItemStyle}>
          {item}
        </Text>
      </TouchableHighlight>);
        };
        let value = '';
        debugger;
        if (props.value === undefined) { // 只有当value没有传的情况下才会从defaultValue中取值
            value = props.defaultValue === undefined ? '' : props.defaultValue;
        }
        else {
            value = props.value;
        }
        this.state = {
            value
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        // 当传入的value发生变化的时候，更新state
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            return {
                value: nextProps.value,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    }
    render() {
        const { value } = this.state;
        const _a = this.props, { isShowClear, defaultValue, placeholder, historyList, inputStyle, inputWrapStyle, wrapAllStyle, clearIcon, frontIcon } = _a, others = __rest(_a, ["isShowClear", "defaultValue", "placeholder", "historyList", "inputStyle", "inputWrapStyle", "wrapAllStyle", "clearIcon", "frontIcon"]);
        return (<View style={[{
                width: '100%',
                position: 'relative'
            }, wrapAllStyle]}>
        <View style={[styles.textInputWrapper, inputWrapStyle]}>
          {frontIcon}
          <TextInput style={[styles.textInputStyle, inputStyle]} onChangeText={this.onChange} value={value} defaultValue={defaultValue} editable={true} placeholder={placeholder} returnKeyType={'done'} underlineColorAndroid={'transparent'} onSubmitEditing={Keyboard.dismiss} {...others}/>
          {isShowClear && value !== '' && (<TouchableHighlight onPress={this.clear} underlayColor="transparent">
              <Image style={styles.menuArrow} source={clearIcon}/>
            </TouchableHighlight>)}
        </View>
        <FlatList style={styles.autoCompleteWrap} data={historyList} renderItem={this.renderHistory}/>
      </View>);
    }
}
// prop默认值
Input.defaultProps = {
    placeholder: '请输入',
    isShowClear: false,
    clearIcon: require('./icon/icon-clear.png')
};
