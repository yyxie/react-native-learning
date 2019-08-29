import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
/**
 * @fileOverview 按钮
 * @author 解园园
 * @time 2019-05
 */

import styles from './index.style';

interface Props {
  onPress: any;
  disabled: boolean;
  type?: 'primary' | 'danger' | 'primary';
  ghost?: boolean;
  style?: StyleSheet;
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
    const {
      children, type, disabled, ghost, style
    } = this.props;
    const styleMain = ghost ? 'ghost' : 'primary';
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.onPress}
      >
        <View style={[styles[styleMain].commonWrap, styles[styleMain][`${type}Wrap`], disabled && styles[styleMain].disabled, style]}>
          <Text style={[styles[styleMain].commonText, styles[styleMain][`${type}Text`]]}>{children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
