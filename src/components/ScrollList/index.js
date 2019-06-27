"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var EmptyList_1 = __importDefault(require("../EmptyList"));
var ScrollList = /** @class */ (function (_super) {
    __extends(ScrollList, _super);
    function ScrollList(props) {
        var _this = _super.call(this, props) || this;
        _this.reachEnd = false;
        _this.time = 0;
        _this.renderItem = function (item) {
            var renderItem = _this.props.renderItem;
            if (renderItem) {
                return renderItem(item.item);
            }
            return null;
        };
        _this.onRefresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, data, onRefresh, getParam, requestAction, params, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('onRefresh');
                        _a = this.props, data = _a.data, onRefresh = _a.onRefresh, getParam = _a.getParam, requestAction = _a.requestAction;
                        this.setState({
                            refreshing: true
                        });
                        if (!data) return [3 /*break*/, 2];
                        return [4 /*yield*/, onRefresh];
                    case 1:
                        (_b.sent()) && onRefresh();
                        this.setState({
                            refreshing: false
                        });
                        return [3 /*break*/, 4];
                    case 2:
                        if (!requestAction) return [3 /*break*/, 4];
                        params = getParam && getParam();
                        return [4 /*yield*/, requestAction(__assign({}, params, { currentPage: 1 }))];
                    case 3:
                        result = _b.sent();
                        if (result.errorCode === 0) {
                            this.setState({
                                data: result.data.list,
                                totalPage: result.data.totalPage,
                                currentPage: result.data.currentPage,
                                refreshing: false
                            });
                        }
                        this.time = new Date().getTime();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.onNextPage = function (info) { return __awaiter(_this, void 0, void 0, function () {
            var _a, totalPage, currentPage, refreshing, _b, data, getParam, requestAction, onNextPage, params, nextPage, result_1, newList;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('nextpage1');
                        _a = this.state, totalPage = _a.totalPage, currentPage = _a.currentPage, refreshing = _a.refreshing;
                        _b = this.props, data = _b.data, getParam = _b.getParam, requestAction = _b.requestAction, onNextPage = _b.onNextPage;
                        // if (info.distanceFromEnd <= 0) {
                        if (currentPage >= totalPage) {
                            return [2 /*return*/, false];
                        }
                        if (!data) return [3 /*break*/, 1];
                        onNextPage && onNextPage();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!requestAction) return [3 /*break*/, 3];
                        params = getParam && getParam();
                        nextPage = currentPage + 1;
                        return [4 /*yield*/, requestAction(__assign({}, params, { currentPage: nextPage }))];
                    case 2:
                        result_1 = _c.sent();
                        if (result_1.errorCode === 0) {
                            newList = result_1.data.list.map(function (item, i) {
                                var newItem = __assign({}, item);
                                newItem.id = result_1.data.list.length + i;
                                return newItem;
                            });
                            this.setState({
                                data: result_1.data.list.concat(newList),
                                totalPage: result_1.data.totalPage,
                                currentPage: nextPage,
                            });
                            this.time = new Date().getTime();
                        }
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            data: [],
            refreshing: false,
            totalPage: 0,
            currentPage: 0
        };
        return _this;
    }
    ScrollList.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, requestAction, getParam, params, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('didMount');
                        _a = this.props, data = _a.data, requestAction = _a.requestAction, getParam = _a.getParam;
                        if (!data) return [3 /*break*/, 1];
                        this.setState({
                            data: data
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        if (!requestAction) return [3 /*break*/, 3];
                        params = getParam && getParam();
                        return [4 /*yield*/, requestAction(params)];
                    case 2:
                        result = _b.sent();
                        if (result.errorCode === 0) {
                            this.setState({
                                data: result.data.list,
                                currentPage: 1,
                                totalPage: result.data.totalPage
                            });
                        }
                        _b.label = 3;
                    case 3:
                        this.time = new Date().getTime();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScrollList.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if ('data' in nextProps && nextProps.data !== this.state.data) {
            this.setState({
                data: nextProps.data
            });
        }
    };
    ScrollList.prototype.render = function () {
        var _a = this.state, data = _a.data, refreshing = _a.refreshing, totalPage = _a.totalPage, currentPage = _a.currentPage;
        var _b = this.props, _c = _b.nextPageTitle, nextPageTitle = _c === void 0 ? '~~~加载更多内容~~~' : _c, _d = _b.isPage, isPage = _d === void 0 ? true : _d, _e = _b.isPullFresh, isPullFresh = _e === void 0 ? true : _e, _f = _b.keyFiled, keyFiled = _f === void 0 ? 'id' : _f;
        return (react_1.default.createElement(react_native_1.View, { style: { height: react_native_1.Dimensions.get('window').height - 180 } },
            react_1.default.createElement(react_native_1.FlatList, { style: { flex: 1 }, data: data, onRefresh: isPullFresh ? this.onRefresh : function () {
                }, refreshing: refreshing, renderItem: this.renderItem, onEndReachedThreshold: 0.01, onEndReached: isPage ? this.onNextPage : function () {
                }, ListEmptyComponent: EmptyList_1.default, keyExtractor: function (item) { return item[keyFiled]; }, ListFooterComponent: function () {
                    if (currentPage < totalPage) {
                        return react_1.default.createElement(react_native_1.Text, { style: { height: 32, fontSize: 12, textAlign: 'center' } }, nextPageTitle);
                    }
                    if (currentPage === totalPage) {
                        return react_1.default.createElement(react_native_1.Text, { style: { height: 32, fontSize: 12, textAlign: 'center' } }, "\u6CA1\u6709\u66F4\u591A\u5185\u5BB9");
                    }
                    return null;
                } })));
    };
    return ScrollList;
}(react_1.default.PureComponent));
exports.default = ScrollList;
