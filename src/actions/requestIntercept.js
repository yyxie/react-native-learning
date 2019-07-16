var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// request请求拦截配置
import { Navigation } from 'react-native-navigation';
// @ts-ignore
import qs from 'qs';
// @ts-ignore
import Tips from '../utils/tips';
// @ts-ignore
import { Login } from '../registerPage/pageName.json';
// @ts-ignore
const requestIntercept = {
    // 发出请求时的回调函数
    config(url, params = {}, method, contentType) {
        // get请求处理入参
        if (method.toUpperCase() === 'GET' && params) {
            url += '?';
            url += qs.stringify(params);
        }
        else if (contentType !== 'formData') {
            params = contentType === 'form' ? qs.stringify(params) : JSON.stringify(params);
        }
        // 必须返回参数对象，否则无法发送请求到服务端
        return {
            url,
            params
        };
    },
    // 请求成功后的回调函数
    success: (res) => __awaiter(this, void 0, void 0, function* () {
        // 可以在这里对收到的响应数据对象进行加工处理
        // 必须返回响应数据对象，否则后续无法对响应数据进行处理
        if (res.errorCode === -9999) { // 登录信息失效的情况
            Navigation.setRoot({
                root: {
                    stack: {
                        id: 'login',
                        children: [{
                                component: {
                                    name: Login,
                                }
                            }]
                    }
                }
            });
            return new Promise(() => {
            });
        }
        return res;
    }),
    // 请求失败后的回调函数
    fail(res) {
        if (Object.prototype.toString.call(res) === '[object Error]' && res.message === 'Network request failed') {
            Tips.fail('无网络，请确认网络状态');
        }
        else {
            Tips.fail(res.message);
        }
        return res;
    },
    // 请求完成时的回调函数(请求成功或失败都会被执行)
    complete() {
    }
};
export default requestIntercept;