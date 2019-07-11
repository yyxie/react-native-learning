import React from 'react';
import { View, Text } from 'react-native';
import styles from './index.style';
export default class FormLayout extends React.PureComponent {
    render() {
        const { mode, label, children, layoutStyle, labelStyle, componentStyle } = this.props;
        return (<View style={[styles[`${mode}FromLayoutWrap`], ...layoutStyle]}>
        {label ? <Text style={[styles[`${mode}FormLabel`], ...labelStyle]}>
          {label}
          {':'}
        </Text> : null}
        <View style={[styles.formComponent, styles.verticalFormComponent, ...componentStyle]}>
          {children}
        </View>
      </View>);
    }
}
FormLayout.defaultProps = {
    mode: 'inline'
};
