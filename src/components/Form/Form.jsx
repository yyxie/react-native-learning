import React from 'react';
import { View } from 'react-native';
import FormItem from '../FormLayout';
import createForm from './CreateForm';
class Form extends React.Component {
    render() {
        return (<View>
        {this.props.children.map((child) => {
            return React.cloneElement(child);
        })}
      </View>);
    }
}
Form.Item = FormItem;
Form.create = createForm;
export default Form;
