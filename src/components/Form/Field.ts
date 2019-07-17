import validate from './validate';


export default class Field {
  private data: { [key: string]: number | string } = {};

  private rules: { [key: string]: [] } = {};

  private helps: { [key: string]: [] } = {};

  private cacheError: { [key: string]: [] } = {};

  private validateTriggers: { [key: string]: number | string } = {};

  constructor(fields: { [key: string]: number | string }) {
    this.data = fields;
  }

  getField(field: string) {
    return this.data[field];
  }

  getHelps() {
    return this.helps;
  }

  getData() {
    return this.data;
  }

  setHelps(field: string) {
    this.helps[field] = this.cacheError[field];
  }

  cacheHelpToHelps() {
    this.helps = { ...this.cacheError };
  }

  setField(field: string, value: any, rules: [], validateTrigger: string) {
    this.data[field] = value;
    this.rules[field] = rules;
    this.validateTriggers[field] = validateTrigger;
  }

  onChange(val: any, field: string) {
    this.data[field] = val;
    const validateResult = validate(val, this.rules[field]);
    this.data[field] = validateResult.value;
    this.cacheError[field] = [...validateResult.error];
  }

}
