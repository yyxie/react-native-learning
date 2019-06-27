/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, { Component } from 'react';
import { Text, View, ImageBackground,Image } from 'react-native';

import navigationUtil from '../../utils/navigationUtil';
import MenuItem from '../../components/Menu';
import MenuData from './menu';


import styles from './index.style';

export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '111'
    };
  }

  /**
   * 菜单点击事件
   * @param isTab 是否是tab页面
   * @param pageName 页面名称
   * @param isDestory  是否毁掉当前页面
   */
  onMenuClick = (isTab, pageName, isDestory) => {
    // tab页
    isTab && navigationUtil.setNavigation(pageName, false);
    // 不销毁当前页
    !isDestory && navigationUtil.nextPage(this.props.componentId, pageName, pageName);
    // 销毁当前页面
    isDestory && navigationUtil.pushSingleScreenApp(pageName);
  };

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/my/myBackground.png')} style={styles.headerContent}>
          <Image style={styles.userIcon} source={require('../../assets/images/my/icon-user-photo.png')} />
          <View style={styles.nickName}>
            <Text style={styles.userName}>哈哈</Text>
            <Text style={styles.userMobile}>172565656565</Text>
          </View>
        </ImageBackground>
        {MenuData.map((item, index) => {
          return (<MenuItem
            key={item.id}
            title={item.title}
            menuIcon={item.menuIcon}
            onMenuClick={this.onMenuClick.bind(this, item.isTab, item.pageName, item.isDestory)}
          />);
        })}
      </View>
    );
  }
}
