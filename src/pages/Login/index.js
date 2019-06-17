/**
 * @fileOverview 登录页
 * @author 解园园
 * @time 2019-06-13
 */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  DeviceEventEmitter,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Util from '../../utils/util';
import styles from './index.style';
import { MOBILE_HISTORY } from '../../utils/constant';
import { Input, DismissKeyboardHOC, Button } from '../../components';
import Notice from '../../components/Notice';


@DismissKeyboardHOC
export default class Index extends PureComponent {
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
    this.deEmitter = DeviceEventEmitter.addListener('showMessage', (a) => {
      console.log(`接收到通知${a}`);
    });
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
     * 获取验证码
     * @returns {Promise<void>}
     */
  handleGetCode = async () => {
    debugger;
    /*    const { mobile } = this.state;
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
              this.getCodeAction(mobile);
            } */
    console.log(this.props.data.getData());
    Notice.success('获取成功');
    console.log(this.props.getData());
    Notice.success('获取成功');
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
