/**
 * @author 解园园
 * @time 2019-07-11
 */
import Validate from '../Validate';
/**
 * 校验方法
 * @param value 值
 * @param rules 校验配置
 */
const validate = (value, rules) => {
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
        error: errors.length === 0 ? null : errors
    };
};
export default validate;
