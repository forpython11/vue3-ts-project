import request from '@/utils/request'
export function getBanner() {
    return request({
        url: '/api/getBanner', // 这里填写你自己的api地址
        method: 'get', // get方法可以省略不写
    })
}
