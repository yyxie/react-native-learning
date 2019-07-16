import React from 'react';
import { View, Text, Animate } from 'react-native';


import styles from './index.style';


interface Props {
  label: string;
  help: string;
  children: React.ReactElement;
  mode: string;
  layoutStyle: object;
  labelStyle: object;
  componentStyle: object;
}


function intersperseSpace<T>(list: T[]): (T | string)[] {
  return list.reduce((current, item) => [...current, ' ', item], []).slice(1);
}

export default class FormItem extends React.PureComponent<Props, any> {
  static displayName = 'formItem';

  static defaultProps = {
    mode: 'inline',
    layoutStyle: {},
    labelStyle: {},
    componentStyle: {},
  }

  getControls(children: React.ReactNode, recursively: boolean) {
    let controls: React.ReactElement<any>[] = [];
    const childrenArray = React.Children.toArray(children);
    for (let i = 0; i < childrenArray.length; i++) {
      if (!recursively && controls.length > 0) {
        break;
      }

      const child = childrenArray[i] as React.ReactElement<any>;
      if (
        child.type
          && ((child.type as any) === FormItem || (child.type as any).displayName === 'FormItem')
      ) {
        continue;
      }
      if (!child.props) {
        continue;
      }
      if (child.props.children) {
        controls = controls.concat(this.getControls(child.props.children, recursively));
      }
    }
    return controls;
  }

  getHelpMessage() {
    debugger;
    if (this.getControls(this.props.children, false)[0]) {
      const child = this.getControls(this.props.children, false)[0];
      const { errors } = child && child.props;
      if (errors) {
        return intersperseSpace(
          errors.map((e: any, index: number) => {
            let node: React.ReactElement<any> | null = null;

            if (React.isValidElement(e)) {
              node = e;
            } else if (React.isValidElement(e.message)) {
              node = e.message;
            }

            return node ? React.cloneElement(node, { key: index }) : e.message;
          }),
        );
      }
      return '';
    }
    return '';
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
      <View style={[styles[`${mode}FromLayoutWrap`], layoutStyle]}>
        {!!label && <Text style={[styles[`${mode}FormLabel`], labelStyle]}>{`${label}:`}</Text>}
        <View style={[styles[`${mode}FormComponentWrap`], componentStyle]}>
          <View style={[styles.formComponent]}>
            {children}
          </View>
          <Text style={[styles.help]}>{help}</Text>
        </View>
      </View>
    );
  }
}
