import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  myWrap: {
    height: '100%',
    backgroundColor: '#616268',
  },
  /* 顶部用户信息 */
  headerContent: {
    width: '100%',
    height: 111,
    resizeMode: 'cover',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    marginLeft: 30
  },
  nickName: {
    marginLeft: 20,
  },
  userName: {
    color: '#fff',
    lineHeight: 24,
  },
  userMobile: {
    color: '#fff',
    lineHeight: 24,
  },
  /* 顶部用户信息 */
});
