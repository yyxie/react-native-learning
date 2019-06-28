import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
/**
 * @fileOverview 按钮
 * @author 解园园
 * @time 2019-05
 */

import styles from './index.style';

interface Props {
  onPress: any;
  disabled: boolean;
  type: string;
}

export default class ButtonCustom extends React.Component<Props, any> {

  static defaultProps = {
    type: 'primary',
  };

  onPress = () => {
    const { onPress, disabled } = this.props;
    if (disabled) {
      return false;
    }
    onPress && onPress();
  };

  render() {
    const { children, type, disabled } = this.props;
    return (
      <TouchableHighlight
        underlayColor={styles[`${type}Wrap`].backgroundColor}
        style={[styles.commonWrap, styles[`${type}Wrap`], disabled ? styles.disabled : {}]}
        onPress={this.onPress}
      >
        <Text style={[styles.commonText, styles[`${type}Text`]]}>{children}</Text>
      </TouchableHighlight>
    );
  }
}
