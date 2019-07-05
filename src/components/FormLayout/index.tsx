import React from 'react';
import { View, Text } from 'react-native';


import styles from './index.style';


interface Props {
  label: string;
  children: React.ReactNode;
  mode: string;
  layoutStyle: React.CSSProperties;
  labelStyle: React.CSSProperties;
  componentStyle: React.CSSProperties;
}

export default class FormLayout extends React.PureComponent<Props, any> {
  static defaultProps = {
    mode: 'inline'
  }

  render() {
    const {
      mode, label, children, layoutStyle, labelStyle, componentStyle
    } = this.props;
    return (
      <View style={[styles[`${mode}FromLayoutWrap`], ...layoutStyle]}>
        {label ? <Text style={[styles[`${mode}FormLabel`], ...labelStyle]}>
          {label}
          {':'}
        </Text> : null
        }
        <View style={[styles.formComponent, styles.verticalFormComponent, ...componentStyle]}>
          {children}
        </View>
      </View>
    );
  }
}
