import request from '@/utils/request';

const api_name = '';//TODO 需要更改api的地址

export function getList(params:JSON) { //TODO 我甚至不知道这个params是什么。
    return request({
        url: `${api_name}`,
        method: 'get',
        params: params
    });
}