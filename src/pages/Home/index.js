/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ScrollList from '../../components/ScrollList';
import navigationUtil from '../../utils/navigationUtil';
import pageName from '../../registerPage/pageName.json';

import Actions from '../../actions/actions';
import styles from './index.style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    const { data } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollList
          keyFiled="id"
          style={styles.container}
          renderItem={this.renderItem}
          requestAction={Actions.getList}
        />
      </View>
    );
  }
}
