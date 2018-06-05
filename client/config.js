/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://exbw7hbn.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        // 获取用户信息
        userInfoUrl: `${host}/weapp/userInfo`,

        //上传贴子接口
        updatePostUrl: `${host}/weapp/updatePost`,

        //获取匿名昵称接口
        getNicknameUrl: `${host}/weapp/getNickname`,

        //改变nickname表里times
        setNickname_timeUrl: `${host}/weapp/setNickname_time`,

        //获取贴子
        getPostUrl: `${host}/weapp/getPost`,

        //发表评论
        updateCommentUrl: `${host}/weapp/updateComment`,

        //获取评论
        getCommentUrl: `${host}/weapp/getComment`,

        //获取全部贴子
        getAllPostUrl: `${host}/weapp/getAllPost`,
    }
};

module.exports = config;
