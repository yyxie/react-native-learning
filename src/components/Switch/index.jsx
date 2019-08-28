/**
 * @fileOverview: switch组件
 * @author: 解园园
 * @date: 2019-08-26
 * @time: 09:54
 */
import React, { Component } from 'react';
import { View, Animated, TouchableHighlight, Text } from 'react-native';
import styles from './indexStyle';
const colorMap = {
    0: '#8F95A2',
    1: '#3DA5FF'
};
export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            const { switchValue } = this.state;
            console.log('switchValue', switchValue);
            const { disabled } = this.props;
            if (!disabled) {
                this.animDialog = Animated.timing(// 随时间变化而执行动画
                this.state.leftValue, // 动画中的变量值
                {
                    toValue: switchValue === 0 ? 28 : 2,
                    duration: 300,
                });
                this.animDialog.start(() => {
                    const newVal = switchValue === 0 ? 1 : 0;
                    this.setState({
                        bg: colorMap[newVal],
                        switchValue: newVal
                    });
                    this.props.onChange && this.props.onChange(newVal);
                });
            }
        };
        this.state = {
            leftValue: new Animated.Value(props.value === 0 ? 2 : 28),
            bg: colorMap[props.value],
            switchValue: props.value
        };
    }
    render() {
        debugger;
        const { leftValue, bg, switchValue } = this.state;
        const { disabled } = this.props;
        return (<TouchableHighlight activeOpacity={disabled ? 0.4 : 1} underlayColor="transparent" onPress={this.handleClick}>
        <View style={[styles.switchWrapper, { backgroundColor: bg, opacity: disabled ? 0.4 : 1 }]}>
          <Animated.View style={[styles.switchInner, {
                left: leftValue,
            }]}>
            <Text style={[styles.switchText, { color: bg }]}>{switchValue === 0 ? '否' : '是'}</Text>
          </Animated.View>
        </View>
      </TouchableHighlight>);
    }
}
App.defaultProps = {
    value: 0,
    disabled: false
};
