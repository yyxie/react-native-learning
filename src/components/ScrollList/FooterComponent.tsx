/**
 * @fileOverview 列表尾部组件
 * @time 2019/06/28
 */
import React from 'react';

import NoMore from './NoMore';
import LoadMore from './LoadMore';

export default function (props: {isPage: boolean; currentPage: number; totalPage: number; nextPageTitle?: string; noMoreTxt?: string}) {
  const {
    isPage, currentPage, totalPage, nextPageTitle, noMoreTxt
  } = props;
  if (isPage) { // 分页
    if (totalPage === 0) {
      return null;
    }
    if (currentPage < totalPage) {
      return <LoadMore loadMoreTxt={nextPageTitle || '～～加载更多内容～～'} />;
    }
    if (currentPage === totalPage) {
      return <NoMore noMoreTxt={noMoreTxt || '没有更多了'} />;
    }
  } else { // 不分页
    return <NoMore noMoreTxt={noMoreTxt || '没有更多了'} />;
  }

  return null;
}
