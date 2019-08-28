import { StyleSheet } from 'react-native';

/**
 * @fileOverview:
 * @author: 解园园
 * @date: 2019-08-26
 * @time: 09:56
 */
export default StyleSheet.create({
  switchLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  switchWrapper: {
    width: 56,
    height: 30,
    borderRadius: 15,
    position: 'relative'
  },
  switchInner: {
    width: 26,
    height: 26,
    borderRadius: 26,
    position: 'absolute',
    left: 2,
    top: 2,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  switchText: {
    fontSize: 11
  }
});
