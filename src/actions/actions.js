import request, { apiBaseUrl } from './request';

const Actions = {
  getList: (params, options = {}) => {
    return request({
      url: `${apiBaseUrl}/api/home.json`,
      method: 'Get',
      params,
      ...options
    });
  },
};

export default Actions;
