/**
 * @fileOverview 滚动列表item
 * @time 2019-06-29
 */

import React from 'react';
import {
  View, Text, Dimensions, PanResponder, Animated, TouchableHighlight
} from 'react-native';

interface Props {
  item: { item: object };
  leftWidth?: number;
  rightWidth?: number;
  renderItems: (item: object) => React.ReactElement;
  renderLeft: (item: object) => React.ReactElement | string;
  renderRight: (item: object) => React.ReactElement | string;
  rightAction?: void;
}
const screen = Dimensions.get('window');

export default class ListItem extends React.PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      leftDis: -props.leftWidth
    };
  }

  time = 0;

  static defaultProps = {
    leftWidth: 0,
    rightWidth: 0
  };

  componentDidMount() {
  }


  componentWillMount(): void {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        console.log('开始');
        // gestureState.{x,y} 现在会被设置为0
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log(evt.target);
        console.log('t', gestureState.dx);
        const { leftWidth, rightWidth } = this.props;
        // 最近一次的移动距离为gestureState.move{X,Y}
        if (gestureState.dx > 1) { // 右滑
          this.setState({
            leftDis: -leftWidth - gestureState.dx
          });
          if (gestureState.dx >= leftWidth) {
            this.setState({
              leftDis: 0
            });
          }

        }

        if (gestureState.dx < 0 && gestureState.dx < -1) { // 左滑
          this.setState({
            leftDis: -leftWidth + gestureState.dx
          });
          if (Math.abs(gestureState.dx) >= rightWidth) {
            this.setState({
              leftDis: -leftWidth - rightWidth
            });
          }
        }
        console.log('onPanResponderMove');
        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        console.log(evt.target);
        const { leftWidth, rightWidth } = this.props;
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        if (gestureState.dx > 0) { // 右滑
          if (gestureState.dx > leftWidth / 2) {
            this.setState({
              leftDis: 0
            });
          } else {
            this.setState({
              leftDis: -leftWidth
            });
          }
        }
        if (gestureState.dx < 0) { // 左滑
          if (Math.abs(gestureState.dx) > rightWidth / 2) { // 左滑多余右边内容的一半
            this.setState({
              leftDis: -leftWidth - rightWidth
            });
          } else {
            this.setState({
              leftDis: -leftWidth
            });
          }
        }
        console.log('onPanResponderRelease');
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        console.log('onPanResponderTerminate');
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    });
  }

  render() {
    const {
      rightWidth,
      renderItems, renderLeft, renderRight, item, rightAction
    } = this.props;
    const { leftDis } = this.state;
    let LeftElement = null;
    let RightElement = null;
    if (renderLeft && Object.prototype.toString.call(renderLeft) === '[object Function]') {
      LeftElement = renderLeft(item);
    } else {
      LeftElement = (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={rightAction}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>{renderLeft}</Text>
        </TouchableHighlight>);
    }
    if (renderRight && Object.prototype.toString.call(renderRight) === '[object Function]') {
      RightElement = renderRight(item);
    } else {
      RightElement = (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={rightAction}
          style={{
            width: rightWidth, display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
        >
          <Text>{renderRight}</Text>
        </TouchableHighlight>);
    }
    if (renderItems) {
      return (
        <Animated.View
          {...this._panResponder.panHandlers}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'relative',
              left: leftDis
            }}
          >
            {LeftElement}
            <View style={{ width: screen.width }}>
              {renderItems(item.item)}
            </View>
            {RightElement}
          </View>
        </Animated.View>
      );
    }
    return null;
  }
}
