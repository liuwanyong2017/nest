export const config = {
    environment: "dev",
    wx: {
        appId: "wxe55e7cab546ee4c8",
        appSecret: "7f90b018dd79ea54cd05308bec06c53c",
        appUrl: `https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code`
            // 这里的字符串不可以转行，转行就会有\n存在于字符串，发请求就会出问题
    },
};