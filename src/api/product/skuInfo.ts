import request from '@/utils/request';

const api_name = '/admin/product/skuInfo'; //TODO 后端路径

export default {

  getPageList(page: selectType, limit: selectType, searchObj: selectObjectType) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    });
  },

  getById(id: argsType) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    });
  },

  save(role: argsType) {
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

  removeRows(idList: Array<number>) { //TODO 检查类型
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  },

  //商品上架
  publish(id: argsType, status: argsType) {
    return request({
      url: `${api_name}/publish/${id}/${status}`,
      method: 'get'
    });
  },

  //商品审核
  check(id: argsType, status: argsType) {
    return request({
      url: `${api_name}/check/${id}/${status}`,
      method: 'get'
    });
  },

  //新人专享
  isNewPerson(id: argsType, status: argsType) {
    return request({
      url: `${api_name}/isNewPerson/${id}/${status}`,
      method: 'get'
    });
  },
  
}
