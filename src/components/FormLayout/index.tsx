import React from 'react';
import { View, Text } from 'react-native';


import styles from './index.style';


interface Props {
  label: string;
  help: string;
  children: React.ReactElement;
  mode: 'inline' | 'vertical';
  layoutStyle: object;
  labelStyle: object;
  componentStyle: object;
}

export default class FormItem extends React.PureComponent<Props, any> {
  static displayName = 'formItem';

  static defaultProps = {
    mode: 'inline',
    layoutStyle: {},
    labelStyle: {},
    componentStyle: {},
  }

  render() {
    const {
      mode, label, children, layoutStyle, labelStyle, componentStyle
    } = this.props;
    let help = '';
    try {
      help = children.props.errors[0].message;
    } catch {
      // a.b.c.d.e.f 不存在
    }
    return (
      <View style={[styles.formLayoutWrap, styles[`${mode}FromLayoutWrap`], layoutStyle]}>
        {!!label && <View style={[styles[`${mode}FormLabel`], labelStyle]}>
          <Text style={[styles[`${mode}FormLabelTxt`]]}>{`${label}:`}</Text>
        </View>}
        <View style={[styles[`${mode}FormComponentWrap`], componentStyle]}>
          {React.cloneElement(children, !!label && { mode })}
        </View>
      </View>
    );
  }
}
