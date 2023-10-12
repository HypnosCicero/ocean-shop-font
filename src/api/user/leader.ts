import request from '@/utils/request';

const api_name = '/admin/user/leader'; //TODO 后端路径

export default {

  getPageCheckList(page: selectType, limit: selectType) {
    return request({
      url: `${api_name}/checkList/${page}/${limit}`,
      method: 'get'
    });
  },

  getPageList(page: selectType, limit: selectType) {
    return request({
      url: `${api_name}/list/${page}/${limit}`,
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

  removeRows(idList: Array<number>) { //TODO 检查数组类型
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    });
  },

  check(id: argsType, status: argsType) {
    return request({
      url: `${api_name}/check/${id}/${status}`,
      method: 'post'
    });
  },

}
