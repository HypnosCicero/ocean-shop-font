import request from '@/utils/request'

const api_name = '/admin/acl/user' //TODO 为什么会有这个路径？
const api_name_test='/admin/acl/index'

/*
登陆
*/
export function login(data:JSON) {
  return request({
    url: `${api_name_test}/login`,
    method: 'post',
    data: data
  })
}

/*
获取用户信息(根据token)
*/
export function getInfo() {
  return request({
    url: `${api_name_test}/info`,
    method: 'get'
  })
}

/*
登出
*/
export function logout() {
  return request({
    url: `${api_name_test}/logout`,
    method: 'post'
  })
}

/*
获取当前用户的菜单权限列表
*/
export function getMenu() {
  return request({
    url: `${api_name_test}/menu`,
    method: 'get'
  })
}


/*
获取后台用户分页列表(带搜索)
*/
export function getPageList( page: selectType, limit: selectType, searchObj:JSON) {
  return request({
    url: `${api_name}/${page}/${limit}`,
    method: 'get',
    params: searchObj
  })
}

/*
根据ID获取某个后台用户
*/
export function getById( id: argsType ) {
  return request({
    url: `${api_name}/get/${id}`,
    method: 'get'
  })
}

/*
保存一个新的后台用户
*/
export function add( user: JSON ) {
  return request({
    url: `${api_name}/save`,
    method: 'post',
    data: user
  })
}

/*
更新一个后台用户
*/
export function update( user: JSON) {
  return request({
    url: `${api_name}/update`,
    method: 'put',
    data: user
  })
}

/*
获取某个用户的所有角色
*/
export function getRoles( adminId: argsType ) {
  return request({
    url: `${api_name}/toAssign/${adminId}`,
    method: 'get'
  })
}

/*
给某个用户分配角色
roleId的结构: 字符串, 'rId1,rId2,rId3'
*/
export function assignRoles( adminId: argsType, roleId: argsType ) {
  return request({
    url: `${api_name}/doAssign`,
    method: 'post',
    params: {
      adminId,
      roleId
    }
  })
}

/*
删除某个用户
*/
export function removeById( id: argsType ) {
  return request({
    url: `${api_name}/remove/${id}`,
    method: 'delete'
  })
}

/*
批量删除多个用户
ids的结构: ids是包含n个id的数组
*/
export function removeUsers( ids:Array<number> ) {
  return request({
    url: `${api_name}/batchRemove`,
    method: 'delete',
    data: ids
  })
}
