import React from 'react';
import { View } from 'react-native';
import Field from './Field';
import FormItem from '../FormLayout';


interface Props {
  children: [React.ReactElement];
  form: Field;
}

class Form extends React.Component<Props, any> {

  static Item = FormItem;

  static create = function (WrapComponent: React.ReactNode, data: { [key: string]: number | string }) {
    return class Wrap extends React.PureComponent<any, any> {
      constructor(props: any) {
        super(props);
        this.state = {
          form: new Field(data)
        };
      }

      render() {
        debugger;
        // @ts-ignore
        return <WrapComponent form={this.state.form} />;
      }
    };
  };

  render() {
    return (
      <View>
        {
          this.props.children.map((child: React.ReactElement) => {
            return React.cloneElement(child, { help: 'dddd' });
          })
        }
      </View>
    );
  }
}


export default Form;
