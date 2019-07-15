import React from 'react';
import { View } from 'react-native';
import Field from './Field';
import FormItem from '../FormLayout';
class Form extends React.Component {
    render() {
        return (<View>
        {this.props.children.map((child) => {
            return React.cloneElement(child, { help: 'dddd' });
        })}
      </View>);
    }
}
Form.Item = FormItem;
Form.create = function (WrapComponent, data) {
    return class Wrap extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                form: new Field(data)
            };
        }
        render() {
            debugger;
            // @ts-ignore
            return <WrapComponent form={this.state.form}/>;
        }
    };
};
export default Form;
