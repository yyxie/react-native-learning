import { AsyncStorage } from 'react-native';
import { COOKIE } from './constant';
import navigationUtil from './navigationUtil';
import pageName from '../registerPage/pageName';

const Util = {
  /**
   * 向storage中存值
   * @returns {Promise<void>}
   */
  setStorage: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  },

  /**
   * 获取storage中的值
   * @param key key值
   * @returns {Promise<void>}
   */
  getStorage: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return Promise.resolve(JSON.parse(value));
      }

      return Promise.resolve('');
    } catch (error) {
      console.log('getStorage error', error);
      return Promise.resolve('');
    }
  },
  /**
   * 清空缓存
   */
  clearStorage: async () => {
    await AsyncStorage.clear();
  },
  /**
   * 删除storage中某个key对应内容
   * @param key
   * @returns {Promise<void>}
   */
  removeStorageItem: async (key) => {
    await AsyncStorage.removeItem(key);
  },

  /**
   *  验证是否是手机号码
   */
  vailPhone: (number) => {
    let flag = false;
    const myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
    if (number.length !== 11 || !myreg.test(number)) {
      flag = true;
    }
    return flag;
  },
  /**
   * 检查是否登录
   * @returns {Promise<void>}
   */
  checkLogin: async () => {
    const cookie = await Util.getStorage(COOKIE);
    if (cookie) { // 如果已经登录
      navigationUtil.setNavigation(pageName.Home, true);
    } else { // 未登录
      navigationUtil.pushSingleScreenApp(pageName.Login, true);
    }
  }
};
export default Util;
