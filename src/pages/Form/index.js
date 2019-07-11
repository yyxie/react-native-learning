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
  Input, FormLayout, Form, Button
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
    console.log(form.getAllValue());
    console.log(form.getValueWithValidate());
  }

  render() {
    const { form } = this.props;
    console.log(form);
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.searchBar}>
          {
            form.creatField({
              key: 'search1',
              initValue: '5',
              type: '',
              rules: [{
                required: true,
                message: '名称必填'
              }]
            })(
              <Input
                frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
                placeholder="输入名称进行查询"
              />
            )
          }
        </View>
        <FormLayout label="搜索项">
          {
            form.creatField({ key: 'search2', initValue: '3', type: '' })(
              <Input
                frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
                placeholder="输入名称进行查询"
              />
            )
          }
        </FormLayout>
        <View style={{ paddingHorizontal: 20 }}>
          <FormLayout label="搜索项" mode="vertical">
            <Input
              frontIcon={<Image style={styles.frontIcon} source={require('../../assets/icons/icon-search.png')} />}
              placeholder="输入名称进行查询"
            />
          </FormLayout>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <Button onPress={this.onPress}>获取值</Button>
        </View>
      </View>
    );
  }
}

debugger;
export default Form(FormInner, {});
