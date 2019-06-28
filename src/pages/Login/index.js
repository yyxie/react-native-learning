/**
 * @fileOverview 登录页
 * @author 解园园
 * @time 2019-06-13
 */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Util from '../../utils/util';
import styles from './index.style';
import { COOKIE, MOBILE_HISTORY } from '../../utils/constant';
import { Input, DismissKeyboardHOC, Button } from '../../components';
import Notice from '../../components/Notice';
import navigationUtil from '../../utils/navigationUtil';
import { Home } from '../../registerPage/pageName.json';


@DismissKeyboardHOC
export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      mobileHistory: [],
      filterMobileHistory: [],
      disableLoginBtn: false
    };
  }

  componentWillUnmount() {
    if (this.deEmitter) {
      this.deEmitter.remove();
    }
  }

  componentDidAppear() {
    this.getMobileHistory();
  }

  componentDidMount() {
  }

  getMobileHistory = async () => {
    const mobileHistory = await Util.getStorage(MOBILE_HISTORY);
    this.setState({
      mobileHistory: mobileHistory || [],
      filterMobileHistory: []
    });
  };

  /**
   * 获取焦点
   */
  mobileFocus = () => {
    const { mobileHistory } = this.state;
    this.setState({
      filterMobileHistory: mobileHistory || []
    });
  };

  /**
   * 校验手机号
   * @param rule 规则
   * @param value 值
   * @param callback 回调
   */
  validatorMobile = (value) => {
    if (!value) {
      Notice.fail('手机号不能为空！');
      return false;
    }
    if (Util.vailPhone(value)) {
      Notice.fail('请输入正确的中国大陆手机号！');
      return false;
    }
    return true;
  };

  /**
   * 获取验证码
   * @returns {Promise<void>}
   */
  handleGetCode = async () => {
    const { mobile } = this.state;
    const mobileHistory = await Util.getStorage(MOBILE_HISTORY) || [];
    if (this.validatorMobile(mobile)) {
      const index = mobileHistory.indexOf(mobile);
      if (mobileHistory.length === 0 || index === -1) { // 不存在
        if (mobileHistory.length >= 3) {
          mobileHistory.splice(2, 1);
          mobileHistory.push(mobile);
        } else {
          mobileHistory.push(mobile);
        }
      }
      if (index !== -1) { // 存在的情况将其位置调到最后
        mobileHistory.splice(index, 1);
        mobileHistory.push(mobile);
      }
      await Util.setStorage(MOBILE_HISTORY, JSON.stringify(mobileHistory));
      await Util.setStorage(COOKIE, '1111');
      navigationUtil.setNavigation(Home);
      Notice.success('登录成功！');
    }
  };

  /**
   * 手机号change
   * @param mobile
   */
  mobileChange = (mobile) => {
    let { filterMobileHistory } = this.state;
    const { mobileHistory } = this.state;
    if (mobile) {
      if (mobile.length === 11) { // 当输完11位手机号的时候不展示历史手机号
        filterMobileHistory = [];
      } else {
        filterMobileHistory = mobileHistory.filter((item) => {
          return item.indexOf(mobile) !== -1;
        });
      }
    } else {
      filterMobileHistory = mobileHistory;
    }

    this.setState({
      filterMobileHistory,
      mobile
    });
  };

  render() {
    const { mobile, filterMobileHistory = [], disableLoginBtn } = this.state;
    const sortFilterMobileHistory = [...filterMobileHistory].reverse(); // 倒叙排列的手机号
    return (
      <View style={[styles.loginWrap, styles.flex]}>
        <View style={[styles.loginInner]}>
          <View style={styles.titleWrap}>
            <Text style={styles.mainTitle}>登录</Text>
            <View style={styles.subTitle}>
              <Text>欢迎使用</Text>
              <Text style={styles.blueTxt}>白云生掌柜</Text>
            </View>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.autoCompleteListItemStyle}>
              <Input
                placeholder="请输入手机号"
                onChange={this.mobileChange}
                autoFocus={true}
                isShowClear={true}
                historyList={sortFilterMobileHistory}
                keyboardType={'numeric'}
                maxLength={11}
                multiline={true}
                underlineColorAndroid={'transparent'}
                onFocus={this.mobileFocus}
              />
            </View>
            <View style={{
              marginTop: 50,
            }}
            >
              <Button
                onPress={this.handleGetCode}
              >
                {disableLoginBtn ? '正在获取验证码...' : '获取验证码'}
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
