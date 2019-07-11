/**
 * @fileOverview 没有更多内容
 * @time 2019/06/28
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    noMoreWrap: {
        display: 'flex',
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noMoreTxt: {
        color: '#8E8E8E'
    }
});
export default function (props) {
    return (<View style={styles.noMoreWrap}>
      <Text style={styles.noMoreTxt}>{props.noMoreTxt}</Text>
    </View>);
}
