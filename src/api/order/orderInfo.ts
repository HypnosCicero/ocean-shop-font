import request from '@/utils/request'

const api_name = '/admin/order/orderInfo'; //TODO 后端路径

export default {

  getPageList(page: selectType, limit: selectType, searchObj: selectObjectType) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    });
  },

  show(orderId: argsType) {
    return request({
      url: `${api_name}/get/${orderId}`,
      method: 'get'
    });
  },

  deliver(orderDeliverVo: JSON) {
    return request({
      url: `${api_name}/deliver`,
      method: 'post',
      data: orderDeliverVo
    });
  },

  findReceiveList(wareId: argsType, date: Date) {
    return request({
      url: `${api_name}/findReceiveList/${wareId}/${date}`,
      method: 'get'
    });
  },

  findLeaderReceiveList(leaderId: argsType, date: Date) {
    return request({
      url: `${api_name}/findLeaderReceiveList/${leaderId}/${date}`,
      method: 'get'
    });
  }
}
