import React from 'react';
import {
  FlatList, Text, View, Dimensions
} from 'react-native';


import EmptyList from '../EmptyList';

interface Props {
  data?: [];
  nextPageTitle?: string;
  renderItem: (item: object) => React.ReactElement;
  requestAction?: any;
  getParam?: any;
  onRefresh?: any;
  onNextPage?: any;
  style: object;
  keyFiled: string;
  isPage?: boolean;
  isPullFresh?: boolean;
}

export default class ScrollList extends React.PureComponent<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      totalPage: 0,
      currentPage: 0
    };
  }

  reachEnd = false;

  time = 0;

  async componentDidMount() {
    console.log('didMount');
    const { data, requestAction, getParam } = this.props;
    if (data) {
      this.setState({
        data
      });
    } else if (requestAction) {
      const params = getParam && getParam();
      const result = await requestAction(params);
      if (result.errorCode === 0) {
        this.setState({
          data: result.data.list,
          currentPage: 1,
          totalPage: result.data.totalPage
        });
      }
    }
    this.time = new Date().getTime();
  }

  componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    if ('data' in nextProps && nextProps.data !== this.state.data) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  renderItem = (item: { item: object }) => {
    const { renderItem } = this.props;
    if (renderItem) {
      return renderItem(item.item);
    }
    return null;
  }

  onRefresh = async () => {
    console.log('onRefresh');
    const {
      data, onRefresh, getParam, requestAction
    } = this.props;
    this.setState({
      refreshing: true
    });
    if (data) {
      await onRefresh && onRefresh();
      this.setState({
        refreshing: false
      });
    } else if (requestAction) {
      const params = getParam && getParam();
      const result = await requestAction({ ...params, currentPage: 1 });
      if (result.errorCode === 0) {
        this.setState({
          data: result.data.list,
          totalPage: result.data.totalPage,
          currentPage: result.data.currentPage,
          refreshing: false
        });
      }
      this.time = new Date().getTime();
    }
  }

  onNextPage = async (info: { distanceFromEnd: number }) => {
    console.log('nextpage1');
    const { totalPage, currentPage, refreshing } = this.state;
    const {
      data, getParam, requestAction, onNextPage
    } = this.props;
    // if (info.distanceFromEnd <= 0) {
    if (currentPage >= totalPage) {
      return false;
    }
    if (data) {
      onNextPage && onNextPage();
    } else if (requestAction) {
      const params = getParam && getParam();
      const nextPage = currentPage + 1;
      const result = await requestAction({ ...params, currentPage: nextPage });
      if (result.errorCode === 0) {
        const newList = result.data.list.map((item: any, i: any) => {
          const newItem = { ...item };
          newItem.id = result.data.list.length + i;
          return newItem;
        });
        this.setState({
          data: [...result.data.list, ...newList],
          totalPage: result.data.totalPage,
          currentPage: nextPage,
        });
        this.time = new Date().getTime();
      }
    }
    // }
  }

  render() {
    const {
      data, refreshing, totalPage, currentPage
    } = this.state;
    const {
      nextPageTitle = '~~~加载更多内容~~~', isPage = true, isPullFresh = true, keyFiled = 'id',
    } = this.props;

    return (
      <View style={{ height: Dimensions.get('window').height - 180 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          onRefresh={isPullFresh ? this.onRefresh : () => {
          }}
          refreshing={refreshing}
          renderItem={this.renderItem}
          onEndReachedThreshold={0.01}
          onEndReached={isPage ? this.onNextPage : () => {
          }}
          ListEmptyComponent={EmptyList}
          keyExtractor={(item: any) => item[keyFiled]}
          ListFooterComponent={() => {
            if (currentPage < totalPage) {
              return <Text style={{ height: 32, fontSize: 12, textAlign: 'center' }}>{nextPageTitle}</Text>;
            }
            if (currentPage === totalPage) {
              return <Text style={{ height: 32, fontSize: 12, textAlign: 'center' }}>没有更多内容</Text>;
            }
            return null;
          }}
        />
      </View>
    );
  }
}
