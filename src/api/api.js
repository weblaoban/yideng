const host = '/api/'
const url = {
    login: 'merchant/login', //登录接口
    logout: 'merchant/logout', //推出登录接口
}
for (let key in url) {
    url[key] = host + url[key]
}
export default url