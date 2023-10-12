import request from '@/utils/request';

const api_name = '/admin/product/attr'; //TODO 后端路径

export default {

  getList(groupId: argsType) {
    return request({
      url: `${api_name}/${groupId}`,
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

  removeRows(idList: Array<number>) { //TODO 查看数组类型
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  }
}
