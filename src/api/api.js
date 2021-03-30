const host = '/api/'
const url = {
    login: 'customer/login', //登录接口
    logout: 'customer/logout', //推出登录接口
    modifyPas: 'customer/updatePwd', //修改密码
    list: 'freightOrder/list', //列表
    detail: 'freightOrder/detail', //详情   参数freightOrderId
    address: 'dictionaries/paramConfig', //地址
}
for (let key in url) {
    url[key] = host + url[key]
}
export default url