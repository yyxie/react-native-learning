/**
 * @fileOverview form
 * @author 解园园
 * @time 2019-07-05
 */

import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight
} from 'react-native';

import {
  Input, Form, Button, Switch, Modal
} from '../../components';


import styles from './index.style';

class FormInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

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
    this.setState({
      modalVisible: true
    });
    /* const { form } = this.props;
            form.getValueWithValidate((errors, values) => {
              if (!errors) {
                console.log(values);
              } else {
                console.log(errors);
              }
            }); */
  }

  onModalClose = () => {
    this.setState({
      modalVisible: false
    });
  }

  handleGetCode=() => {
    alert('获取code');
  }

  render() {
    const { form } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Form>
          <Form.Item>
            {
              form.getFieldDecorator({
                key: 'search1',
                initValue: '5',
                type: '',
                validateTrigger: 'save',
                rules: [{
                  required: true,
                  message: '名称必填'
                }]
              })(
                <Input
                  ref={ref => this.inputRef = ref}
                  frontIcon={<Image
                    style={styles.frontIcon}
                    source={require('../../assets/icons/icon-search.png')}
                  />}
                  placeholder="输入名称进行查询"
                  suffix={
                    <TouchableHighlight
                      onPress={this.handleGetCode}
                      underlayColor="transparent"
                    >
                      <Text style={{ color: '#88919A' }}>获取验证码</Text>
                    </TouchableHighlight>}
                />
              )
            }
          </Form.Item>
          <Form.Item label="搜索项">
            <Input
              placeholder="输入名称进行查询"
            />
          </Form.Item>
          <Form.Item label="搜索项" mode="vertical">
            <Input
              frontIcon={<Image
                style={styles.frontIcon}
                source={require('../../assets/icons/icon-search.png')}
              />}
              placeholder="输入名称进行查询"
            />
          </Form.Item>
          <Form.Item label="搜索项" mode="vertical">
            <Switch value={1} />
          </Form.Item>
          <Form.Item label="搜索项">
            <Switch value={1} />
          </Form.Item>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Button Press={this.onPress}>获取值primary</Button>
          </View>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Button type="danger" Press={this.onPress}>获取值danger</Button>
          </View>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Button ghost Press={this.onPress}>获取值primary ghost</Button>
          </View>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Button ghost type="danger" Press={this.onPress}>获取值ghost danger</Button>
          </View>
          <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
            <Button disabled Press={this.onPress}>获取值disabled</Button>
          </View>
        </Form>
        <Modal visible={modalVisible} onClose={this.onModalClose}>
          <Text>ffff</Text>
        </Modal>
      </View>
    );
  }
}

export default Form.create(FormInner, {});
