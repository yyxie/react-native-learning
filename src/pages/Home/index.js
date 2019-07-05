/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight
} from 'react-native';

import { ScrollList, Input, FormLayout } from '../../components';

import Actions from '../../actions/actions';
import styles from './index.style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        title: '111'
      },
      {
        id: 2,
        title: '222'
      }]
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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchBar}>
          <Input
            frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
            placeholder="输入名称进行查询"
          />
        </View>
        <ScrollList
          keyFiled="id"
          style={styles.container}
          renderItems={this.renderItem}
          data={this.state.data}
        />
      </View>
    );
  }
}
