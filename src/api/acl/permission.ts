import request from '@/utils/request';

const api_name = ''; //TODO 需要替换的路径

export default {
    /* 
     * 获取权限(菜单/功能)列表
    */
    getPermissionList() {
        return request({
            url: `${api_name}`,
            method: 'get'
        });
    },

    /* 
      删除一个权限
    */
    removePermission( id:string | number ) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
        });
    },

    /* 
      保存一个权限项
    */
    addPermission( permission: JSON ) {
        return request({
            url: `${api_name}/save`,
            method: "post",
            data: permission
        });
    },

    /* 
       更新一个权限项
    */
    updatePermission(permission:JSON) {
        return request({
            url: `${api_name}/update`,
            method: "put",
            data: permission
        }); 
    },

    /* 
      查看某个角色的权限列表 
    */
    toAssign(roleId: string | number ) {
        return request({
            url: `${api_name}/toAssign/${roleId}`,
            method: "get"
        });
    },

    /* 
       给某个角色授权
     */
    doAssign( roleId:string | number, permissionId:string | number) {
        return request({
            url: `${api_name}/doAssign`,
            method: "post",
            params: {roleId, permissionId}
        });
    }

}