import request from '@/utils/request';

const api_name = '/admin/sys/ware'; //TODO　后端路径

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

  removeRows(idList: Array<number>) { //TODO　检查数组类型
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  },

  findAllList() {
    return request({
      url: `${api_name}/findAllList`,
      method: 'get'
    });
  }
  
}
