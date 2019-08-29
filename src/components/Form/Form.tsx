import React from 'react';
import { View } from 'react-native';
import Field from './Field';
import FormItem from '../FormLayout';
import createForm from './CreateForm';

interface Props {
  children: [React.ReactElement];
  form: Field;
}

class Form extends React.Component<Props, any> {

  static Item = FormItem;

  static create = createForm;

  render() {
    return (
      <View style={{ marginHorizontal: 16 }}>
        {
          this.props.children.map((child: React.ReactElement) => {
            return React.cloneElement(child);
          })
        }
      </View>
    );
  }
}


export default Form;
