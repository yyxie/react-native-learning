import PageNames from '../../registerPage/pageName.json';

export default [
  {
    id: 1,
    title: '首页',
    pageName: PageNames.Home,
    menuIcon: require('../../assets/icons/icon-menu-room.png'),
    isTab: true,
  },
  {
    id: 2,
    title: '我的',
    pageName: PageNames.My,
    menuIcon: require('../../assets/icons/icon-menu-operator.png'),
    isTab: true,
  }
];
