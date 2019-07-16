/**
 * @fileOverview form
 * @author 解园园
 * @time 2019-07-05
 */

import React, { Component } from 'react';
import {
  Text, View, Image
} from 'react-native';

import {
  Input, Form, Button
} from '../../components';


import styles from './index.style';

class FormInner extends Component {

  componentDidMount() {
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

  onPress = () => {
    const { form } = this.props;
    console.log(form.getValueWithValidate());
    console.log(this.inputRef);
  }

  render() {
    const { form } = this.props;
    console.log(form);
    debugger;
    return (
      <Form style={{ flex: 1 }}>
        <Form.Item style={styles.searchBar}>
          {
            form.getFieldDecorator({
              key: 'search1',
              initValue: '5',
              type: '',
              rules: [{
                required: true,
                message: '名称必填'
              }]
            })(
              <Input
                ref={ref => this.inputRef = ref}
                frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
                placeholder="输入名称进行查询"
              />
            )
          }
        </Form.Item>
        <Form.Item label="搜索项">
          {
            form.getFieldDecorator({
              key: 'search2',
              initValue: '3',
              type: '',
              rules: [{
                type: 'number',
                message: '请输入数字'
              }]
            })(
              <Input
                placeholder="输入名称进行查询"
              />
            )
          }
        </Form.Item>
        <Form.Item label="搜索项" mode="vertical">
          <Input
            frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
            placeholder="输入名称进行查询"
          />
        </Form.Item>
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <Button onPress={this.onPress}>获取值</Button>
        </View>
      </Form>
    );
  }
}

export default Form.create(FormInner, {});
