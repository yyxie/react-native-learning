import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 容器
  layout: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  // 内容
  cont: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  // 提示(容器)
  infoLayout: {
    backgroundColor: 'rgba(0, 140, 255, 0.3)',
  },
  // 提示(内容)
  infoCont: {
    color: '#008CFF',
  },
  // 成功(容器)
  successLayout: {
    backgroundColor: '#02ff07',
    // 'rgba(2, 255, 7, 0.3)',
  },
  // 成功(内容)
  successContent: {
    color: '#02ff07',
  },
  // 失败(容器)
  failLayout: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  // 成功(内容)
  failContent: {
    color: '#ff0000',
  },
});
