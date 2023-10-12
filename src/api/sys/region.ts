import request from '@/utils/request';

const api_name = '/admin/sys/region'; //TODO 后端路径

export default {

  findRegionByKeyword(keyword: argsType) {
    return request({
      url: `${api_name}/findRegionByKeyword/${keyword}`,
      method: 'get'
    });
  },

  findByParentId(parentId: argsType) {
    return request({
      url: `${api_name}/findByParentId/${parentId}`,
      method: 'get'
    });
  }

}
