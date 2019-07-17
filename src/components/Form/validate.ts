/**
 * @author 解园园
 * @time 2019-07-11
 */
import Validate from '../Validate';

interface RuleType {
  message: string;
  min: number;
  max: number;
  pattern: RegExp;
  validator: (value: any) => boolean;
  required: boolean;
  type: string;
}
/**
 * 校验方法
 * @param value 值
 * @param rules 校验配置
 */
const validate = (value: any, rules: RuleType[]) => {
  let val = '';
  const errors = [];
  if (rules) {
    for (let i = 0, len = rules.length; i < len; ++i) {
      const rule = rules[i];
      const validateData = Validate(rule, value);
      val = validateData.val;
      errors.push(validateData.error);
    }
  }


  return {
    value: val,
    error: errors
  };
};

export default validate;
