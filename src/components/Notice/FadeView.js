import React from 'react';
import { Animated, Easing } from 'react-native';

export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(1), // 透明度初始值设为1
  }

  componentDidMount() {
    Animated.timing( // 随时间变化而执行动画
      this.state.fadeAnim, // 动画中的变量值
      {
        toValue: 0, //  透明度
        duration: this.props.duration, // 让动画持续一段时间
      }
    ).start(); // 开始执行动画
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim, // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
