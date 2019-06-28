/**
 * @fileOverview 空列表组件
 * @time 2019/06/28
 */

import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './index.style';

interface Props {
  emptyImg?: any;
  emptyTitle?: string;
  flatListHeight?: any;
}

export default function (props: Props) {
  const { emptyImg = require('./image/icon-empty.png'), emptyTitle = '~暂无相关记录~', flatListHeight = 0 } = props;
  if (flatListHeight) {
    return (
      <View style={{ ...styles.emptyWrap, height: flatListHeight }}>
        <Image style={styles.emptyImg} source={emptyImg} />
        <Text style={styles.emptyTitle}>{emptyTitle}</Text>
      </View>
    );
  }
  return null;
}
