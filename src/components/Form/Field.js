import validate from './validate';
export default class Field {
    constructor(fields) {
        this.data = {};
        this.rules = {};
        this.helps = {};
        this.cacheError = {};
        this.validateTriggers = {};
        this.data = fields;
    }
    getField(field) {
        return this.data[field];
    }
    getHelps() {
        return this.helps;
    }
    getData() {
        return this.data;
    }
    setHelps(field) {
        this.helps[field] = this.cacheError[field];
    }
    cacheHelpToHelps() {
        this.helps = Object.assign({}, this.cacheError);
    }
    setField(field, value, rules, validateTrigger) {
        this.data[field] = value;
        this.rules[field] = rules;
        this.validateTriggers[field] = validateTrigger;
    }
    onChange(val, field) {
        this.data[field] = val;
        const validateResult = validate(val, this.rules[field]);
        this.data[field] = validateResult.value;
        this.cacheError[field] = [...validateResult.error];
    }
}
