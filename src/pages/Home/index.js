/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './index.style';
import navigationUtil from '../../utils/navigationUtil';
import pageName from '../../registerPage/pageName.json';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  pressHandler = () => {
    navigationUtil.pushSingleScreenApp(pageName.Login, true);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.pressHandler} style={styles.welcome}>Welcome to Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
