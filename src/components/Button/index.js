import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './index.style';

export default class ButtonCustom extends React.Component {

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
      <TouchableHighlight style={[styles[`${type}Wrap`], disabled ? styles.disabled : {}]} onPress={this.onPress}>
        <Text style={styles[`${type}Text`]}>{children}</Text>
      </TouchableHighlight>
    );
  }
}
