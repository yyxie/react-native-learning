import React from 'react';
import Field from './Field';
export default function (WrapComponent, data) {
    const fieldStore = new Field(data);
    return class Wrap extends React.PureComponent {
        constructor() {
            super(...arguments);
            // @ts-ignore
            this.creatField = (options) => (WrappedComponent) => {
                const { key, initValue, rules } = options;
                console.log(key, initValue);
                let value = initValue;
                if (fieldStore.getField(key)) {
                    value = fieldStore.getField(key);
                }
                else {
                    fieldStore.setField(key, initValue, rules);
                }
                const onChange = (val) => {
                    fieldStore.onChange(val, key);
                    this.forceUpdate();
                };
                // @ts-ignore
                const errors = JSON.stringify(fieldStore.getHelps()) === '{}' ? [] : fieldStore.getHelps()[key];
                return React.cloneElement(WrappedComponent, {
                    defaultValue: value, onChange, name: key, errors
                });
            };
        }
        getForm() {
            return {
                getFieldDecorator: this.creatField,
            };
        }
        render() {
            // @ts-ignore
            return <WrapComponent form={this.getForm()}/>;
        }
    };
}
