import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

// @ts-ignore
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

  // @ts-ignore
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
        activeOpacity={1}
        style={[styles.commonWrap, styles[`${type}Wrap`], disabled ? styles.disabled : {}]}
        onPress={this.onPress}
      >
        <Text style={[styles.commonText, styles[`${type}Text`]]}>{children}</Text>
      </TouchableHighlight>
    );
  }
}
