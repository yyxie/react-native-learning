/**
 * @file 接口请求
 */
import AppConfig from 'AppConfig';
import Utils from '../utils/util';
// @ts-ignore
import Tips from '../utils/tips';
import requestIntercept from './requestIntercept';

/* eslint-disable */
const config = {
  env: AppConfig.env,
  host: AppConfig.url,
  date: '20190106',
  appType: 'AptBoss',
};
/* eslint-enable  */

/**
 * 接口地址的基础url前缀
 */
export const apiBaseUrl = 'http://localhost:8081'; //`${config.host}/saas20/api/${config.date}/${config.appType}`;

/**
 * 静态资源url地址
 */
export const cdnUrl = config.cdnUrl;

/**
 * 当前所处环境
 */
export const env = config.env;

/**
 * 统一request的请求封装
 * @param {Object} options 选项配置
 * @param {string} [options.url]：请求url， 必传
 * @param {boolean} [options.showLoading]：是否展示loading ,可选， 默认展示
 * @param {boolean} [options.contentType]：参数的数据类型，可选， 默认form 即application/x-www-form-urlencoded
 * @param {string} [options.method]：请求类型method,可选，默认Get
 * @param {string} [options.dataType]：接收的数据类型,可选 默认json
 * @param {string} [options.setContentType]：是否设置Content-Type类型,可选 默认true
 * @param {string} [options.params]：请求参数, 可选
 * @
 */
export default async (options) => {
  // 定义contentType
  const contentTypeMapping = {
    form: 'application/x-www-form-urlencoded',
    formData: 'multipart/form-data',
    text: 'text/plain',
    json: 'application/json'
  };

  const {
    showLoading,
    contentType = 'form',
    method = 'POST',
    dataType = 'json',
    setContentType = true
  } = options;

  let {
    params, url
  } = options;
  // 如果 showLoading则添加loadding
  showLoading !== false && Tips.addLoading();
  if (requestIntercept.config) {
    // 处理请求参数
    const res = requestIntercept.config(url, params, method, contentType);
    params = res.params;
    url = res.url;
  }
  let ticket = '';

  try {
    const systemData = await Utils.getUserData();
    ticket = systemData && systemData.ticket;
  } catch (e) {
    ticket = '';
  }
  try {
    const headersInfo = {
      intebox_sso_app: config.appType,
      intebox_sso_tkt: ticket
    };
    if (setContentType) {
      // multipart/form-data需要动态设置boundary，不需要设置Content-Type，会自动加上
      headersInfo['Content-Type'] = contentTypeMapping[contentType] || contentType;
    }

    const resultPromise = await Promise.race([fetch(url, {
      method: method || 'GET',
      body: method.toUpperCase() === 'POST' ? params : '',
      dataType: dataType || 'json',
      headers: headersInfo,
    }), new Promise((resolve, reject) => {
      setTimeout(() => reject(new TypeError('网络请求超时,请稍后再试')), 60000);
    })]);
    // 如果 showLoading则删除loadding
    showLoading !== false && Tips.deleteLoading();
    // 结果json化
    let res = await resultPromise.json();
    requestIntercept.complete && requestIntercept.complete(res);
    if (resultPromise.status === 200) {
      res = requestIntercept.success && requestIntercept.success(res);
    } else {
      res = requestIntercept.fail && requestIntercept.fail(res);
    }

    return res;
  } catch (e) {
    // 如果 showLoading则删除loadding
    showLoading !== false && Tips.deleteLoading();
    // 处理异常，网络异常，地址问题等
    const res = requestIntercept.fail && requestIntercept.fail(e);
    return res;
  }
};
