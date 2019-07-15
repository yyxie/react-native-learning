export default function (rule, value) {
    let val = '';
    const error = [];
    if (Object.prototype.hasOwnProperty.call(rule, 'required')) {
        if (value) {
            val = value;
        }
        else {
            error.push({ message: rule.message });
        }
    }
    if (value && /^[0-9]*$/.test(value)) { // 数字
        if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
            if (value < rule.min) {
                error.push({ message: rule.message });
            }
            else {
                val = value;
            }
        }
        if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
            if (value > rule.max) {
                error.push({ message: rule.message });
            }
            else {
                val = value;
            }
        }
    }
    else { // 字符串
        if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
            if (value.length < rule.min) {
                error.push({ message: rule.message });
            }
            else {
                val = value;
            }
        }
        if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
            if (value.length > rule.max) {
                error.push({ message: rule.message });
            }
            else {
                val = value;
            }
        }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'pattern')) {
        if (rule.pattern.test(value)) {
            val = value;
        }
        else {
            error.push({ message: rule.message });
        }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'validator')) {
        if (rule.validator(value)) {
            val = value;
        }
        else {
            error.push({ message: rule.message });
        }
    }
    return {
        val,
        error
    };
}
