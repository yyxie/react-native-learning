/**
 * @fileOverview 首页
 * @author 解园园
 * @time 2019-06-12
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styles from './index.style'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class My extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>我的</Text>
            </View>
        );
    }
}


