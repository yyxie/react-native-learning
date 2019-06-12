/**
 * @fileOverview 登录
 * @author 解园园
 * @time 2019-06-12
 */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import Util from '../../utils/util';
import {COOKIE} from '../../utils/constant'
import styles from './index.style'
import navigationUtil from "../../utils/navigationUtil";
import pageName from "../../registerPage/pageName";

export default class Login extends Component {
    login = () => {
        Util.setStorage(COOKIE, '111')
        navigationUtil.setNavigation(pageName.Home, true);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.login}>登录</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}


