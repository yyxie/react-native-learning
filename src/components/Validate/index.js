export default function (rule, value) {
    debugger;
    let val = '';
    let error = {};
    if (Object.prototype.hasOwnProperty.call(rule, 'required')) {
        if (value) {
            val = value;
        }
        else {
            error = { message: rule.message };
        }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'type')) {
        const pattern = { number: /^[0-9]*$/ };
        if (pattern[rule.type].test(value)) {
            val = value;
        }
        else {
            error = { message: rule.message };
        }
    }
    if (value && /^[0-9]*$/.test(value)) { // 数字
        if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
            if (value && value < rule.min) {
                error = { message: rule.message };
            }
            else {
                val = value;
            }
        }
        if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
            if (value && value > rule.max) {
                error = { message: rule.message };
            }
            else {
                val = value;
            }
        }
    }
    else { // 字符串
        if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
            if (value && value.length < rule.min) {
                error = { message: rule.message };
            }
            else {
                val = value;
            }
        }
        if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
            if (value && value.length > rule.max) {
                error = { message: rule.message };
            }
            else {
                val = value;
            }
        }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'pattern')) {
        if (value && rule.pattern.test(value)) {
            val = value;
        }
        else {
            error = { message: rule.message };
        }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'validator')) {
        if (value && rule.validator(value)) {
            val = value;
        }
        else {
            error = { message: rule.message };
        }
    }
    return {
        val,
        error
    };
}
