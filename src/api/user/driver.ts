import request from '@/utils/request';

const api_name = '/admin/user/driver'; //TODO 后端路径

export default {
  findDriver(wareId: argsType) {
    return request({
      url: `${api_name}/findDriver/${wareId}`,
      method: 'get'
    });
  }
}
