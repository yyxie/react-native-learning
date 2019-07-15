/**
 * @author 解园园
 * @time 2019-06-10
 */

import React, { PureComponent } from 'react';
import {
  View, Text, DeviceEventEmitter, InteractionManager
} from 'react-native';
import FadeView from './FadeView';

import styles from './index.style';


export default class NoticeContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 'info',
      title: '',
      show: false,
      duration: 1000
    };
  }

  componentDidMount() {
    this.doEmitter = DeviceEventEmitter.addListener('showMessage', (type, message, duration, callBack) => {
      this.setState({
        type,
        title: message,
        show: true,
        duration
      });
      InteractionManager.runAfterInteractions(() => { // 在稍后执行代码，不会延迟当前进行的动画。
        this.setState({
          show: false
        });
        callBack && callBack();
      });
    });
  }

  componentWillUnmount() {
    this.doEmitter.remove();
  }

  render() {
    const {
      show, title, type, duration
    } = this.state;
    return (
      show && <FadeView duration={duration}>
        <View style={[styles.layout, styles[`${type}Layout`]]}>
          <Text style={[styles.cont, styles[`${type}Content`]]}>
            {title}
          </Text>
        </View>
      </FadeView>);
  }
}
