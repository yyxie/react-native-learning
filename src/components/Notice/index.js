/**
 * @fileoverview 顶部提示
 * @author 解园园
 */
import { DeviceEventEmitter } from 'react-native';

export default {
  info(message, duration = 1000, callBack) {
    DeviceEventEmitter.emit('showMessage', 'info', message, duration, callBack);
  },

  success(message, duration = 1000, callBack) {
    DeviceEventEmitter.emit('showMessage', 'success', message, duration, callBack);
  },

  fail(message, duration = 3000, callBack) {
    DeviceEventEmitter.emit('showMessage', 'fail', message, duration, callBack);
  },
};
