/**
 * @fileOverview 滚动列表
 * @time 2019-06-29
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import EmptyList from './EmptyList';
import FooterComponent from './FooterComponent';
export default class ScrollLists extends React.PureComponent {
    constructor(props) {
        super(props);
        this.time = 0;
        /**
         * 渲染子项目
         * @param item
         */
        this.renderItem = (item) => {
            const { renderItems } = this.props;
            if (renderItems) {
                return renderItems(item.item);
            }
            return null;
        };
        /**
         * 下拉刷新
         */
        this.onRefresh = () => __awaiter(this, void 0, void 0, function* () {
            const { data, onRefresh, getRequestParam, requestAction, isPullFresh } = this.props;
            if (!isPullFresh) {
                return false;
            }
            if (data) { // 从外部传递数据的情况
                if (onRefresh) {
                    this.setState({
                        refreshing: true
                    });
                    (yield onRefresh) && onRefresh();
                    this.setState({
                        refreshing: false
                    });
                }
            }
            else if (requestAction) { // 接口的情况
                this.setState({
                    refreshing: true
                });
                const params = getRequestParam && getRequestParam(); // 获取请求参数
                const result = yield requestAction(Object.assign({}, params, { currentPage: 1 })); // 发送请求
                if (result.errorCode === 0) {
                    this.setState({
                        data: result.data.list,
                        totalPage: result.data.totalPage,
                        currentPage: 1,
                        refreshing: false
                    });
                }
            }
        });
        /**
         * 上拉加载事件
         */
        this.onNextPage = () => __awaiter(this, void 0, void 0, function* () {
            const { totalPage, currentPage, isPage } = this.state;
            const { data, getRequestParam, requestAction, onNextPage } = this.props;
            // 不分页, 或 当前页已经是最后一页, 或 刚请求结束不到500s(为防止上拉导致的多次触发onNextPage事件)
            if (!isPage || currentPage >= totalPage || new Date().getTime() - this.time < 500) {
                return false;
            }
            if (data) {
                onNextPage && onNextPage();
            }
            else if (requestAction) {
                const params = getRequestParam && getRequestParam();
                const nextPage = currentPage + 1;
                const result = yield requestAction(Object.assign({}, params, { currentPage: nextPage }));
                if (result.errorCode === 0) {
                    const newList = result.data.list.map((item, i) => {
                        const newItem = Object.assign({}, item);
                        newItem.id = this.state.data.length + i + 1;
                        return newItem;
                    });
                    const { data } = this.state;
                    this.setState({
                        data: [...data, ...newList],
                        totalPage: result.data.totalPage,
                        currentPage: nextPage,
                    });
                    this.time = new Date().getTime();
                }
            }
        });
        /**
         * 当加载或者布局改变的时候被调用
         * @param e 事件源
         */
        this.onLayout = (e) => {
            const height = e.nativeEvent.layout.height;
            if (this.state.flatListHeight < height) {
                this.setState({ flatListHeight: height });
            }
        };
        this.state = {
            data: [],
            refreshing: false,
            totalPage: 0,
            currentPage: 0,
            isPage: false
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, requestAction, getRequestParam, isPage } = this.props;
            if (data) {
                this.setState({
                    data,
                    flatListHeight: 0,
                    isPage: isPage || false
                });
            }
            else if (requestAction) {
                const params = getRequestParam && getRequestParam();
                const result = yield requestAction(params);
                if (result.errorCode === 0) {
                    this.setState({
                        data: result.data.list,
                        currentPage: 1,
                        totalPage: result.data.totalPage,
                        flatListHeight: 0,
                        isPage: isPage || true
                    });
                }
            }
            this.time = new Date().getTime();
        });
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if ('data' in nextProps) {
            this.setState({
                data: nextProps.data
            });
        }
    }
    render() {
        const { data, refreshing, totalPage, currentPage, flatListHeight, isPage } = this.state;
        const _a = this.props, { isPullFresh, keyFiled, noMoreTxt, nextPageTitle, emptyImg, emptyTitle } = _a, others = __rest(_a, ["isPullFresh", "keyFiled", "noMoreTxt", "nextPageTitle", "emptyImg", "emptyTitle"]);
        return (<View style={{ height: Dimensions.get('window').height - 180 }}>
        <FlatList style={{ flex: 1 }} data={data} onRefresh={this.onRefresh} refreshing={refreshing} renderItem={this.renderItem} onEndReachedThreshold={0.01} onEndReached={this.onNextPage} ListEmptyComponent={() => <EmptyList flatListHeight={flatListHeight} emptyImg={emptyImg} emptyTitle={emptyTitle}/>} keyExtractor={(item) => item[keyFiled]} ListFooterComponent={() => <FooterComponent isPage={isPage} currentPage={currentPage} totalPage={totalPage} noMoreTxt={noMoreTxt} nextPageTitle={nextPageTitle}/>} onLayout={this.onLayout} {...others}/>
      </View>);
    }
}
ScrollLists.defaultProps = {
    isPullFresh: true,
    keyFiled: 'id'
};
