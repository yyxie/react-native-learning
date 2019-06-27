import { Portal, Toast } from '@ant-design/react-native';

// 提示类工具函数
const Tips = {
  // loading的数量
  loadingCount: 0,
  key: 1, // 记录；loading 的key
  toastCount: 0, // 记录 toast个数
  failDuration: 3, // 失败时长
  successDuration: 1, // 成功时长
  infoDuration: 3, // 普通提示时长
  /**
   * 添加loading
   */
  addLoading: () => {
    if (Tips.loadingCount === 0) {
      Tips.key = Toast.loading('', 0, () => {
      }, true);
    }
    Tips.loadingCount += 1;
  },

  /**
   * 删除loading
   */
  deleteLoading: () => {
    Tips.loadingCount -= 1;
    if (Tips.loadingCount === 0) {
      Portal.remove(Tips.key);
    }
  },
  /**
   * 显示成功提示
   * @param {String} message 提示内容
   * @param {Function} onHide 隐藏提示后的回调函数
   */
  success(message, onHide, duration, mask, ...other) {
    // tip关闭
    const onClose = () => {
      if (Tips.toastCount > 0) { // 控制回调次数，主要是针对蚂蚁内部的问题做的解决方案,临时后续继续优化
        onHide && onHide();
        Tips.toastCount = 0;
      }
    };

    if (Tips.toastCount === 0) { // 一次只展示一个提示语
      Toast.success(message, duration || Tips.successDuration, onClose, mask, ...other);
      Tips.toastCount += 1;
    }
  },

  /**
   * 显示失败提示
   * @param {String} message 提示内容
   * @param {Function} onHide 隐藏提示后的回调函数
   */
  fail(message = '', onHide, duration, mask, ...other) {
    // tip关闭
    const onClose = () => {
      if (Tips.toastCount > 0) { // 控制回调次数，主要是针对蚂蚁内部的问题做的解决方案,临时后续继续优化
        onHide && onHide();
        Tips.toastCount = 0;
      }
    };

    if (Tips.toastCount === 0) { // 一次只展示一个提示语
      Tips.toastCount += 1;
      if (message.length && message.length > 4) {
        Toast.info(message, duration || Tips.failDuration, onClose, mask, ...other);
      } else {
        Toast.fail(message, duration || Tips.failDuration, onClose, mask, ...other);
      }
    }
  },

  /**
   * 显示普通提示
   * @param {String} message 提示内容
   * @param {Function} onHide 隐藏提示后的回调函数
   */
  info(message, onHide, duration, mask, ...other) {
    // tip关闭
    const onClose = () => {
      if (Tips.toastCount > 0) { // 控制回调次数，主要是针对蚂蚁内部的问题做的解决方案,临时后续继续优化
        onHide && onHide();
        Tips.toastCount = 0;
      }
    };

    if (Tips.toastCount === 0) { // 一次只展示一个提示语
      Tips.toastCount += 1;
      Toast.info(message, duration || Tips.infoDuration, onClose, mask, ...other);
    }
  },
};

export default Tips;
