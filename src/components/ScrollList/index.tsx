/**
 * @fileOverview 滚动列表
 * @time 2019-06-29
 */

import React from 'react';
import {
  FlatList, View, Dimensions, PanResponder, Animated
} from 'react-native';


import EmptyList from './EmptyList';
import FooterComponent from './FooterComponent';
import ListItem from './ListItem';

interface Props {
  data?: [];
  noMoreTxt?: string;
  nextPageTitle?: string;
  renderItems: (item: object) => React.ReactElement;
  renderLeft: (item: object) => React.ReactElement | string;
  renderRight: (item: object) => React.ReactElement | string;
  requestAction?: any;
  getRequestParam?: any;
  onRefresh?: any;
  onNextPage?: any;
  style: object;
  keyFiled: string;
  isPage?: boolean;
  isPullFresh?: boolean;
  emptyImg?: any;
  emptyTitle?: string;
  leftWidth?: number;
  rightWidth?: number;
}
const screen = Dimensions.get('window');

export default class ScrollLists extends React.PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      totalPage: 0,
      currentPage: 0,
      isPage: false
    };
  }

  time = 0;

  static defaultProps = {
    isPullFresh: true,
    keyFiled: 'id',
    leftWidth: 0,
    rightWidth: 0
  };

  async componentDidMount() {
    const {
      data, requestAction, getRequestParam, isPage
    } = this.props;
    if (data) {
      this.setState({
        data,
        flatListHeight: 0,
        isPage: isPage || false
      });
    } else if (requestAction) {
      const params = getRequestParam && getRequestParam();
      const result = await requestAction(params);
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
  }

  componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    if ('data' in nextProps) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  componentWillMount(): void {
  }

  /**
   * 渲染子项目
   * @param item
   */
  renderItem = (item: { item: object }) => {
    const {
      renderItems, renderLeft, renderRight, leftWidth, rightWidth
    } = this.props;
    debugger;
    if (renderItems) {
      return (
        <ListItem
          item={item}
          renderItems={renderItems}
          renderLeft={renderLeft}
          renderRight={renderRight}
          leftWidth={leftWidth}
          rightWidth={rightWidth}
        />
      );
    }
    return null;
  }

  /**
   * 下拉刷新
   */
  onRefresh = async () => {
    const {
      data, onRefresh, getRequestParam, requestAction, isPullFresh
    } = this.props;
    if (!isPullFresh) {
      return false;
    }
    if (data) { // 从外部传递数据的情况
      if (onRefresh) {
        this.setState({
          refreshing: true
        });
        await onRefresh && onRefresh();
        this.setState({
          refreshing: false
        });
      }
    } else if (requestAction) { // 接口的情况
      this.setState({
        refreshing: true
      });
      const params = getRequestParam && getRequestParam(); // 获取请求参数
      const result = await requestAction({ ...params, currentPage: 1 }); // 发送请求
      if (result.errorCode === 0) {
        this.setState({
          data: result.data.list,
          totalPage: result.data.totalPage,
          currentPage: 1,
          refreshing: false
        });
      }
    }
  }

  /**
   * 上拉加载事件
   */
  onNextPage = async () => {
    const { totalPage, currentPage, isPage } = this.state;
    const {
      data, getRequestParam, requestAction, onNextPage
    } = this.props;
    // 不分页, 或 当前页已经是最后一页, 或 刚请求结束不到500s(为防止上拉导致的多次触发onNextPage事件)
    if (!isPage || currentPage >= totalPage || new Date().getTime() - this.time < 500) {
      return false;
    }
    if (data) {
      onNextPage && onNextPage();
    } else if (requestAction) {
      const params = getRequestParam && getRequestParam();
      const nextPage = currentPage + 1;
      const result = await requestAction({ ...params, currentPage: nextPage });
      if (result.errorCode === 0) {
        const newList = result.data.list.map((item: any, i: any) => {
          const newItem = { ...item };
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
  }

  /**
   * 当加载或者布局改变的时候被调用
   * @param e 事件源
   */
  onLayout = (e: any) => {
    const height = e.nativeEvent.layout.height;
    if (this.state.flatListHeight < height) {
      this.setState({ flatListHeight: height });
    }
  }

  render() {
    const {
      data, refreshing, totalPage, currentPage, flatListHeight, isPage
    } = this.state;
    const {
      isPullFresh, keyFiled, noMoreTxt, nextPageTitle, emptyImg, emptyTitle, ...others
    } = this.props;
    return (
      <View style={{ height: Dimensions.get('window').height - 180 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          onRefresh={this.onRefresh}
          refreshing={refreshing}
          renderItem={this.renderItem}
          onEndReachedThreshold={0.01}
          onEndReached={this.onNextPage}
          ListEmptyComponent={() => <EmptyList flatListHeight={flatListHeight} emptyImg={emptyImg} emptyTitle={emptyTitle} />}
          keyExtractor={(item: any) => item[keyFiled]}
          ListFooterComponent={() => <FooterComponent
            isPage={isPage}
            currentPage={currentPage}
            totalPage={totalPage}
            noMoreTxt={noMoreTxt}
            nextPageTitle={nextPageTitle}
          />}
          onLayout={this.onLayout}
          {...others}
        />
      </View>
    );
  }
}
