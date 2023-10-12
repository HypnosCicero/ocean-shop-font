import request from '@/utils/request'

const api_name = '/admin/activity/couponInfo'; //TODO　还是需要查看后端的路径

export default {

  getPageList(page: selectType, limit: selectType) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    });
  },
  getById(id: argsType) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    });
  },

  save(role: JSON) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    });
  },

  updateById(role: JSON) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    });
  },
  removeById(id: argsType) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    });
  },
  removeRows(idList: Array<number>) { //TODO 需要查看是否是数组
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  },

  findCouponRuleList(id: argsType) {
    return request({
      url: `${api_name}/findCouponRuleList/${id}`,
      method: 'get'
    });
  },
  saveCouponRule(rule: JSON) {
    return request({
      url: `${api_name}/saveCouponRule`,
      method: 'post',
      data: rule
    });
  },

  findCouponByKeyword(keyword: argsType) {
    return request({
      url: `${api_name}/findCouponByKeyword/${keyword}`,
      method: 'get'
    });
  }
}
