import validate from './validate';

export default class Field {
  private data: { [key: string]: number | string } = {};

  private rules: { [key: string]: [] } = {};

  private helps: object | null = {};


  constructor(fields: { [key: string]: number | string }) {
    this.data = fields;
    // this.creatField = creatField;
  }

  /*  // @ts-ignore
  creatField = (options: { key: string; initValue: any; rules: [] }) => (WrappedComponent: React.ReactElement) => {
    const { key, initValue, rules } = options;
    console.log(key, initValue);
    let value = initValue;
    if (this.getField(key)) {
      value = this.getField(key);
    } else {
      this.setField(key, initValue, rules);
    }

    const onChange = (val: any) => {
      this.onChange(val, key);
    };
    return React.cloneElement(WrappedComponent, { defaultValue: value, onChange, name: key });
  }; */


  getField(field: string) {
    // @ts-ignore
    return this.data[field];
  }

  getHelps() {
    console.log('helps', this.helps);
    return this.helps;
  }

  setField(field: string, value: any, rules: []) {
    this.data[field] = value;
    this.rules[field] = rules;
  }

  onChange(val: any, field: string) {
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
      } else if (Object.prototype.hasOwnProperty.call(data, key)) {
        // @ts-ignore
        values[key] = data[key];
      }
    }
    this.helps = JSON.stringify(errors) === '{}' ? null : errors;
    console.log('errors', errors);
    return { errors: JSON.stringify(errors) === '{}' ? null : errors, values };

  }

}
