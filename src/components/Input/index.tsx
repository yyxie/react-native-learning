/**
 * @fileOverview 输入框- 支持clear按钮以及历史记录
 * @author 解园园
 * @time 2019-05
 */
import React, { PureComponent } from 'react';
import {
  FlatList,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Text,
  Keyboard,
} from 'react-native';

// @ts-ignore
import styles from './style';

interface Props {
  // 默认值
  defaultValue?: any;
  // 输入框文案
  value?: any;
  // placeholder
  placeholder?: string;
  // 清空按钮的icon
  clearIcon?: any;
  // 是否包含清空按钮
  isShowClear?: boolean;
  // 历史记录
  readonly historyList?: string[] | any;
  // input样式
  inputStyle?: object;
  // input包裹样式
  inputWrapStyle?: object;
  // 整体包裹的样式
  wrapAllStyle?: object;

  // 输入框前的icon
  frontIcon?: React.ReactNode;
  // 其他
  [propsName: string]: any;
}

interface State {
  // 文本框内容
  value: any;
}

export default class Input extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    let value = '';
    if (props.value === undefined) { // 只有当value没有传的情况下才会从defaultValue中取值
      value = props.defaultValue === undefined ? '' : props.defaultValue;
    } else {
      value = props.value;
    }
    this.state = {
      value
    };
  }

  // prop默认值
  static defaultProps = {
    placeholder: '请输入',
    isShowClear: false,
    clearIcon: require('./icon/icon-clear.png')
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 当传入的value发生变化的时候，更新state
    if ('value' in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  /**
   * 内容change
   * @param val 值
   */
  onChange = (value: string) => {
    debugger;
    this.setState({
      value
    });

    this.props.onChange && this.props.onChange(value);
  };

  /**
   * 清空内容
   */
  clear = () => {
    this.setState({
      value: ''
    });
    this.props.onChange && this.props.onChange('');
  };

  /**
   * 选中历史项
   * @param item
   */
  historyItemPress = (text: string) => {
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
  renderHistory = (itemObj: any) => {
    const { item } = itemObj;
    const { renderHistory } = this.props;
    if (renderHistory) {
      return renderHistory(itemObj);
    }
    return (
      <TouchableHighlight key={item} onPress={this.historyItemPress.bind(this, item)} underlayColor="transparent">
        <Text style={styles.autoCompleteListItemStyle}>
          {item}
        </Text>
      </TouchableHighlight>);
  };

  render() {
    const { value } = this.state;
    const {
      isShowClear, defaultValue, placeholder, historyList, inputStyle, inputWrapStyle, wrapAllStyle, clearIcon, frontIcon, ...others
    } = this.props;
    return (
      <View style={[{
        width: '100%',
        position: 'relative'
      }, wrapAllStyle]}
      >
        <View style={[styles.textInputWrapper, inputWrapStyle]}>
          {frontIcon }
          <TextInput
            style={[styles.textInputStyle, inputStyle]}
            onChangeText={this.onChange}
            value={value}
            defaultValue={defaultValue}
            editable={true}
            placeholder={placeholder}
            returnKeyType={'done'}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            {...others}
          />
          {isShowClear && value !== '' && (
            <TouchableHighlight
              onPress={this.clear}
              underlayColor="transparent"
            >
              <Image style={styles.menuArrow} source={clearIcon} />
            </TouchableHighlight>)}
        </View>
        <FlatList
          style={styles.autoCompleteWrap}
          data={historyList}
          renderItem={this.renderHistory}
        />
      </View>
    );
  }
}
