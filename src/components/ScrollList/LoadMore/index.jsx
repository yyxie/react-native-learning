/**
 * @fileOverview 加载更多内容
 * @time 2019/06/28
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    loadMoreWrap: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadMoreTxt: {
        color: '#8E8E8E'
    }
});
export default function (props) {
    return (<View style={styles.loadMoreWrap}>
      <Text style={styles.loadMoreTxt}>{props.loadMoreTxt}</Text>
    </View>);
}
