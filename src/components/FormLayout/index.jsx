import React from 'react';
import { View, Text } from 'react-native';
import styles from './index.style';
function intersperseSpace(list) {
    return list.reduce((current, item) => [...current, ' ', item], []).slice(1);
}
export default class FormItem extends React.PureComponent {
    getControls(children, recursively) {
        let controls = [];
        const childrenArray = React.Children.toArray(children);
        for (let i = 0; i < childrenArray.length; i++) {
            if (!recursively && controls.length > 0) {
                break;
            }
            const child = childrenArray[i];
            if (child.type
                && (child.type === FormItem || child.type.displayName === 'FormItem')) {
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
                return intersperseSpace(errors.map((e, index) => {
                    let node = null;
                    if (React.isValidElement(e)) {
                        node = e;
                    }
                    else if (React.isValidElement(e.message)) {
                        node = e.message;
                    }
                    return node ? React.cloneElement(node, { key: index }) : e.message;
                }));
            }
            return '';
        }
        return '';
    }
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
        {!!label && <Text style={[styles[`${mode}FormLabel`], labelStyle]}>{`${label}:`}</Text>}
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
