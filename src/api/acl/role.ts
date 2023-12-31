/* 
角色管理相关的API请求函数
*/
import request from '@/utils/request';

const api_name = ''; //TODO 需要考虑对应的api路径


export default {
  /* 
  获取角色分页列表(带搜索)
  */
  getPageList(page: selectType, limit: selectType, searchObj: selectObjectType) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj // url查询字符串或表单键值对
    });
  },

    /* 
  保存一个新角色
  */
  save(role: JSON) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    });
  },
  
  /* 
  获取某个角色
  */
  getById(id: argsType) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    });
  },



  /* 
  更新一个角色
  */
  updateById(role: JSON) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    });
  },

  /* 
  获取一个角色的所有权限列表
  */
  getAssign(roleId: argsType) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    });
  },

  /* 
  删除某个角色
  */
  removeById(id: argsType) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    });
  },

  /* 
  批量删除多个角色
  */
  removeRoles(ids: Array<number>) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: ids
    });
  }
}
