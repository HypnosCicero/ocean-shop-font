import request from '@/utils/request';

const api_name = '/admin/activity/activityInfo'; //TODO 后期必然需要更改这个url地址

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

  removeRows(idList: Array<number>) { //TODO 还是一样的这里需要查看是否是id的数组
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  },

  findActivityRuleList(id: argsType) {
    return request({
      url: `${api_name}/findActivityRuleList/${id}`,
      method: 'get'
    });
  },

  saveActivityRule(rule: JSON) {
    return request({
      url: `${api_name}/saveActivityRule`,
      method: 'post',
      data: rule
    });
  },

  findSkuInfoByKeyword(keyword: argsType) {
    return request({
      url: `${api_name}/findSkuInfoByKeyword/${keyword}`,
      method: 'get'
    });
  }
}
