"use strict";
/**
 * @fileOverview 滚动列表
 * @time 2019-06-29
 */
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var EmptyList_1 = __importDefault(require("./EmptyList"));
var FooterComponent_1 = __importDefault(require("./FooterComponent"));
var ScrollLists = /** @class */ (function (_super) {
    __extends(ScrollLists, _super);
    function ScrollLists(props) {
        var _this = _super.call(this, props) || this;
        _this.time = 0;
        /**
         * 渲染子项目
         * @param item
         */
        _this.renderItem = function (item) {
            var renderItems = _this.props.renderItems;
            if (renderItems) {
                return renderItems(item.item);
            }
            return null;
        };
        /**
         * 下拉刷新
         */
        _this.onRefresh = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, data, onRefresh, getRequestParam, requestAction, isPullFresh, params, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, data = _a.data, onRefresh = _a.onRefresh, getRequestParam = _a.getRequestParam, requestAction = _a.requestAction, isPullFresh = _a.isPullFresh;
                        if (!isPullFresh) {
                            return [2 /*return*/, false];
                        }
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
                        params = getRequestParam && getRequestParam();
                        return [4 /*yield*/, requestAction(__assign({}, params, { currentPage: 1 }))];
                    case 3:
                        result = _b.sent();
                        if (result.errorCode === 0) {
                            this.setState({
                                data: result.data.list,
                                totalPage: result.data.totalPage,
                                currentPage: 1,
                                refreshing: false
                            });
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /**
         * 上拉加载事件
         */
        _this.onNextPage = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, totalPage, currentPage, isPage, _b, data, getRequestParam, requestAction, onNextPage, params, nextPage, result, newList, data_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.state, totalPage = _a.totalPage, currentPage = _a.currentPage, isPage = _a.isPage;
                        _b = this.props, data = _b.data, getRequestParam = _b.getRequestParam, requestAction = _b.requestAction, onNextPage = _b.onNextPage;
                        // 不分页, 或 当前页已经是最后一页, 或 刚请求结束不到500s(为防止上拉导致的多次触发onNextPage事件)
                        if (!isPage || currentPage >= totalPage || new Date().getTime() - this.time < 500) {
                            return [2 /*return*/, false];
                        }
                        if (!data) return [3 /*break*/, 1];
                        onNextPage && onNextPage();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!requestAction) return [3 /*break*/, 3];
                        params = getRequestParam && getRequestParam();
                        nextPage = currentPage + 1;
                        return [4 /*yield*/, requestAction(__assign({}, params, { currentPage: nextPage }))];
                    case 2:
                        result = _c.sent();
                        if (result.errorCode === 0) {
                            newList = result.data.list.map(function (item, i) {
                                var newItem = __assign({}, item);
                                newItem.id = _this.state.data.length + i + 1;
                                return newItem;
                            });
                            data_1 = this.state.data;
                            this.setState({
                                data: data_1.concat(newList),
                                totalPage: result.data.totalPage,
                                currentPage: nextPage,
                            });
                            this.time = new Date().getTime();
                        }
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        /**
         * 当加载或者布局改变的时候被调用
         * @param e 事件源
         */
        _this.onLayout = function (e) {
            var height = e.nativeEvent.layout.height;
            if (_this.state.flatListHeight < height) {
                _this.setState({ flatListHeight: height });
            }
        };
        _this.state = {
            data: [],
            refreshing: false,
            totalPage: 0,
            currentPage: 0,
            isPage: false
        };
        return _this;
    }
    ScrollLists.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, requestAction, getRequestParam, isPage, params, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, data = _a.data, requestAction = _a.requestAction, getRequestParam = _a.getRequestParam, isPage = _a.isPage;
                        if (!data) return [3 /*break*/, 1];
                        this.setState({
                            data: data,
                            flatListHeight: 0,
                            isPage: isPage || false
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        if (!requestAction) return [3 /*break*/, 3];
                        params = getRequestParam && getRequestParam();
                        return [4 /*yield*/, requestAction(params)];
                    case 2:
                        result = _b.sent();
                        if (result.errorCode === 0) {
                            this.setState({
                                data: result.data.list,
                                currentPage: 1,
                                totalPage: result.data.totalPage,
                                flatListHeight: 0,
                                isPage: isPage || true
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
    ScrollLists.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if ('data' in nextProps) {
            this.setState({
                data: nextProps.data
            });
        }
    };
    ScrollLists.prototype.render = function () {
        var _a = this.state, data = _a.data, refreshing = _a.refreshing, totalPage = _a.totalPage, currentPage = _a.currentPage, flatListHeight = _a.flatListHeight, isPage = _a.isPage;
        var _b = this.props, isPullFresh = _b.isPullFresh, keyFiled = _b.keyFiled, noMoreTxt = _b.noMoreTxt, nextPageTitle = _b.nextPageTitle, emptyImg = _b.emptyImg, emptyTitle = _b.emptyTitle, others = __rest(_b, ["isPullFresh", "keyFiled", "noMoreTxt", "nextPageTitle", "emptyImg", "emptyTitle"]);
        debugger;
        return (react_1.default.createElement(react_native_1.View, { style: { height: react_native_1.Dimensions.get('window').height - 180 } },
            react_1.default.createElement(react_native_1.FlatList, __assign({ style: { flex: 1 }, data: data, onRefresh: this.onRefresh, refreshing: refreshing, renderItem: this.renderItem, onEndReachedThreshold: 0.01, onEndReached: this.onNextPage, ListEmptyComponent: function () { return react_1.default.createElement(EmptyList_1.default, { flatListHeight: flatListHeight, emptyImg: emptyImg, emptyTitle: emptyTitle }); }, keyExtractor: function (item) { return item[keyFiled]; }, ListFooterComponent: function () { return react_1.default.createElement(FooterComponent_1.default, { isPage: isPage, currentPage: currentPage, totalPage: totalPage, noMoreTxt: noMoreTxt, nextPageTitle: nextPageTitle }); }, onLayout: this.onLayout }, others))));
    };
    ScrollLists.defaultProps = {
        isPullFresh: true,
        keyFiled: 'id'
    };
    return ScrollLists;
}(react_1.default.PureComponent));
exports.default = ScrollLists;
