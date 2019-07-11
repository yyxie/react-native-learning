import React from 'react';
import Field from './Field';

let form: any;

/* const ExampleHoc = (options: {key: string; initValue: any; rules: object}) => (WrappedComponent: React.ReactElement) => {
  const { key, initValue, rules } = options;
  console.log(key, initValue);
  let value = initValue;
  if (form.getField(key)) {
    value = form.getField(key);
  } else {
    form.setField(key, initValue, rules);
  }

  const onChange = function (val: any) {
    form.setField(key, val);
  };
  return React.cloneElement(WrappedComponent, { defaultValue: value, onChange });
}; */


const Form = (WrapComponent: React.ReactNode, data: object) => {
  form = new Field({ data });
  return class Wrap extends React.PureComponent {
    render() {
      // @ts-ignore
      return <WrapComponent form={form} />;
    }
  };
};
export default Form;
