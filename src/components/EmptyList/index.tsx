import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './index.style';

interface Props {
  emptyImg: any;
  emptyTitle: string;
}

export default function (props: Props) {
  const { emptyImg = require('./image/empty-img.png'), emptyTitle = '暂无相关记录' } = props;
  return (
    <View style={styles.emptyWrap}>
      <Image style={styles.emptyImg} source={emptyImg} />
      <Text style={styles.emptyTitle}>{emptyTitle}</Text>
    </View>
  );
}
