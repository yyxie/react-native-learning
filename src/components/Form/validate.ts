/**
 * @author 解园园
 * @time 2019-07-11
 */


/**
 * 校验方法
 * @param value 值
 * @param rules 校验配置
 */
const validate = (value: any, rules: {message?: string; [property: string]: any}[]) => {
  let val = '';
  const error = [];
  debugger;
  for (let i = 0, len = rules.length; i < len; ++i) {
    const rule = rules[i];
    if (Object.prototype.hasOwnProperty.call(rule, 'required')) {
      if (value) {
        val = value;
      } else {
        error.push({ message: rule.message });
      }
    }
    if (value && /^[0-9]*$/.test(value)) { // 数字
      if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
        if (value < rule.min) {
          error.push({ message: rule.message });
        } else {
          val = value;
        }
      }
      if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
        if (value > rule.max) {
          error.push({ message: rule.message });
        } else {
          val = value;
        }
      }
    } else { // 字符串
      if (Object.prototype.hasOwnProperty.call(rule, 'min')) {
        if (value.length < rule.min) {
          error.push({ message: rule.message });
        } else {
          val = value;
        }
      }
      if (Object.prototype.hasOwnProperty.call(rule, 'max')) {
        if (value.length > rule.max) {
          error.push({ message: rule.message });
        } else {
          val = value;
        }
      }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'pattern')) {
      if (rule.pattern.test(value)) {
        val = value;
      } else {
        error.push({ message: rule.message });
      }
    }
    if (Object.prototype.hasOwnProperty.call(rule, 'validator')) {
      if (rule.pattern(value)) {
        val = value;
      } else {
        error.push({ message: rule.message });
      }
    }
  }


  return {
    value: val,
    error: error.length === 0 ? null : error
  };
};

export default validate;
