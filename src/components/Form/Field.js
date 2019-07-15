import React from 'react';
import validate from './validate';
export default class Field {
    constructor(fields) {
        this.data = {};
        this.rules = {};
        this.helps = {};
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
                this.onChange(val, key);
            };
            return React.cloneElement(WrappedComponent, { defaultValue: value, onChange, name: key });
        };
        this.data = fields;
        // this.creatField = creatField;
    }
    setField(field, value, rules) {
        this.data[field] = value;
        this.rules[field] = rules;
    }
    getField(field) {
        // @ts-ignore
        return this.data[field];
    }
    setField(field, value, rules) {
        this.data[field] = value;
        this.rules[field] = rules;
    }
    onChange(val, field) {
        // @ts-ignore
        this.data[field] = val;
        const validateResult = validate(val, this.rules[field]);
        this.data[field] = validateResult.value;
        this.helps[field] = validateResult.error;
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
        this.helps = JSON.stringify(errors) === '{}' ? null : errors;
        return { errors: JSON.stringify(errors) === '{}' ? null : errors, values };
    }
}
