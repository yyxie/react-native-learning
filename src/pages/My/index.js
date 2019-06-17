/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './index.style';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '111'
    };
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{text}</Text>
      </View>
    );
  }
}
