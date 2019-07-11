import React from 'react';
import validate from './validate';
export default class Field {
    constructor(fields) {
        this.rules = {};
        // @ts-ignore
        this.creatField = (options) => (WrappedComponent) => {
            const { key, initValue, rules } = options;
            console.log(key, initValue);
            let value = initValue;
            if (this.getField(key)) {
                value = this.getField(key);
            }
            else {
                this.setField(key, initValue, rules);
            }
            const onChange = (val) => {
                debugger;
                this.onChange(val, key);
            };
            return React.cloneElement(WrappedComponent, { defaultValue: value, onChange });
        };
        const { data } = fields;
        this.data = data;
        // this.creatField = creatField;
    }
    getField(field) {
        // @ts-ignore
        return this.data[field];
    }
    setField(field, value, rules) {
        debugger;
        this.data[field] = value;
        this.rules[field] = rules;
    }
    onChange(val, field) {
        // @ts-ignore
        this.data[field] = val;
    }
    getAllValue() {
        return this.data;
    }
    getValueWithValidate() {
        const { data, rules } = this;
        const values = {};
        const errors = {};
        for (const key in data) {
            // @ts-ignore
            if (Object.prototype.hasOwnProperty.call(rules, key) && rules[key]) {
                // @ts-ignore
                const validateResult = validate(data[key], rules[key]);
                debugger;
                // @ts-ignore
                values[key] = validateResult.value;
                if (validateResult.error) {
                    // @ts-ignore
                    errors[key] = validateResult.error;
                }
            }
            else if (Object.prototype.hasOwnProperty.call(data, key)) {
                // @ts-ignore
                values[key] = data[key];
            }
        }
        return { errors: JSON.stringify(errors) === '{}' ? null : errors, values };
    }
}
