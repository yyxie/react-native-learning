import React from 'react';
import Field from './Field';

export default function (WrapComponent: React.ReactNode, data: { [key: string]: number | string }) {
  const fieldStore = new Field(data);
  return class Wrap extends React.PureComponent<any, any> {
    getForm() {
      return {
        getFieldDecorator: this.creatField,
      };
    }

    // @ts-ignore
    creatField = (options: { key: string; initValue: any; rules: [] }) => (WrappedComponent: React.ReactElement) => {
      const { key, initValue, rules } = options;
      console.log(key, initValue);
      let value = initValue;
      if (fieldStore.getField(key)) {
        value = fieldStore.getField(key);
      } else {
        fieldStore.setField(key, initValue, rules);
      }

      const onChange = (val: any) => {
        fieldStore.onChange(val, key);
        this.forceUpdate();
      };
      // @ts-ignore
      const errors = JSON.stringify(fieldStore.getHelps()) === '{}' ? [] : fieldStore.getHelps()[key];
      return React.cloneElement(WrappedComponent, {
        defaultValue: value, onChange, name: key, errors
      });
    };

    render() {
      // @ts-ignore
      return <WrapComponent form={this.getForm()} />;
    }
  };
}
