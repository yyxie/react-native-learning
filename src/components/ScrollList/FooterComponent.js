"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileOverview 列表尾部组件
 * @time 2019/06/28
 */
var react_1 = __importDefault(require("react"));
var NoMore_1 = __importDefault(require("./NoMore"));
var LoadMore_1 = __importDefault(require("./LoadMore"));
function default_1(props) {
    var isPage = props.isPage, currentPage = props.currentPage, totalPage = props.totalPage, nextPageTitle = props.nextPageTitle, noMoreTxt = props.noMoreTxt;
    if (isPage) { // 分页
        if (totalPage === 0) {
            return null;
        }
        if (currentPage < totalPage) {
            return react_1.default.createElement(LoadMore_1.default, { loadMoreTxt: nextPageTitle || '～～加载更多内容～～' });
        }
        if (currentPage === totalPage) {
            return react_1.default.createElement(NoMore_1.default, { noMoreTxt: noMoreTxt || '没有更多了' });
        }
    }
    else { // 不分页
        return react_1.default.createElement(NoMore_1.default, { noMoreTxt: noMoreTxt || '没有更多了' });
    }
    return null;
}
exports.default = default_1;
