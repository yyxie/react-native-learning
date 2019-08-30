/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { ScrollList } from '../../components';

import Actions from '../../actions/actions';
import styles from './index.style';

const rightWidth = 100;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    // this.getListData();
  }

  /**
   * 渲染列表
   * @param item
   */
  renderItem = (item) => {
    return (
      <View style={styles.listItem} key={item.id}>
        <Text style={styles.listText}>{item.title}</Text>
      </View>);
  };

  handleDel=() => {

  }

  renderRight = () => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.handleDel}
        style={[styles.rightDelBtn, { width: rightWidth }]}
      >
        <Text>删除</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollList
          keyFiled="id"
          style={styles.container}
          renderItems={this.renderItem}
          rightWidth={rightWidth}
          renderRight={this.renderRight}
          rightAction={this.handleDel}
          requestAction={Actions.getList}
        />
      </View>
    );
  }
}
