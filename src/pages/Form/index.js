/**
 * @fileOverview form
 * @author 解园园
 * @time 2019-07-05
 */

import React, { Component } from 'react';
import {
  Text, View, Image
} from 'react-native';

import {Input, FormLayout } from '../../components';


import styles from './index.style';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <FormLayout label="搜索项">
          <Input
            frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
            placeholder="输入名称进行查询"
          />
        </FormLayout>
        <View style={{ paddingHorizontal: 20 }}>
          <FormLayout label="搜索项" mode="vertical">
            <Input
              frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
              placeholder="输入名称进行查询"
            />
          </FormLayout>
        </View>
      </View>
    );
  }
}
