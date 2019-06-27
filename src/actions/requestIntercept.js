"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// request请求拦截配置
var react_native_navigation_1 = require("react-native-navigation");
// @ts-ignore
var qs_1 = __importDefault(require("qs"));
// @ts-ignore
var tips_1 = __importDefault(require("../utils/tips"));
// @ts-ignore
var pageName_json_1 = require("../registerPage/pageName.json");
// @ts-ignore
var requestIntercept = {
    // 发出请求时的回调函数
    config: function (url, params, method, contentType) {
        if (params === void 0) { params = {}; }
        // get请求处理入参
        if (method.toUpperCase() === 'GET' && params) {
            url += '?';
            url += qs_1.default.stringify(params);
        }
        else if (contentType !== 'formData') {
            params = contentType === 'form' ? qs_1.default.stringify(params) : JSON.stringify(params);
        }
        // 必须返回参数对象，否则无法发送请求到服务端
        return {
            url: url,
            params: params
        };
    },
    // 请求成功后的回调函数
    success: function (res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // 可以在这里对收到的响应数据对象进行加工处理
            // 必须返回响应数据对象，否则后续无法对响应数据进行处理
            if (res.errorCode === -9999) { // 登录信息失效的情况
                react_native_navigation_1.Navigation.setRoot({
                    root: {
                        stack: {
                            id: 'login',
                            children: [{
                                    component: {
                                        name: pageName_json_1.Login,
                                    }
                                }]
                        }
                    }
                });
                return [2 /*return*/, new Promise(function () {
                    })];
            }
            return [2 /*return*/, res];
        });
    }); },
    // 请求失败后的回调函数
    fail: function (res) {
        if (Object.prototype.toString.call(res) === '[object Error]' && res.message === 'Network request failed') {
            tips_1.default.fail('无网络，请确认网络状态');
        }
        else {
            tips_1.default.fail(res.message);
        }
        return res;
    },
    // 请求完成时的回调函数(请求成功或失败都会被执行)
    complete: function () {
    }
};
exports.default = requestIntercept;
