import React from 'react';
import { View, Text } from 'react-native';
import styles from './index.style';
export default class FormItem extends React.PureComponent {
    render() {
        const { mode, label, children, layoutStyle, labelStyle, componentStyle } = this.props;
        let help = '';
        try {
            help = children.props.errors[0].message;
        }
        catch (_a) {
            // a.b.c.d.e.f 不存在
        }
        return (<View style={[styles[`${mode}FromLayoutWrap`], layoutStyle]}>
        {!!label && <View style={[styles[`${mode}FormLabel`], labelStyle]}>
          <Text style={[styles[`${mode}FormLabelTxt`]]}>{`${label}:`}</Text>
        </View>}
        <View style={[styles[`${mode}FormComponentWrap`], componentStyle]}>
          <View style={[styles.formComponent]}>
            {children}
          </View>
          <Text style={[styles.help]}>{help}</Text>
        </View>
      </View>);
    }
}
FormItem.displayName = 'formItem';
FormItem.defaultProps = {
    mode: 'inline',
    layoutStyle: {},
    labelStyle: {},
    componentStyle: {},
};
