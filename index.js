/**
 * @fileOverview 入口
 * @author 解园园
 * @time 2019-06-12
 */

import {Navigation} from "react-native-navigation";

import registerPage from './src/registerPage';
import Util from './src/utils/util';

// 注册页面
registerPage();

//app唤醒的事件
Navigation.events().registerAppLaunchedListener(() => {
    Util.checkLogin();
});
