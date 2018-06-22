/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

// --- 登录与授权 Demo --- //
// 登录接口
router.get('/login', authorizationMiddleware, controllers.login)
// 用户信息接口（可以用来验证登录态）
router.get('/user', validationMiddleware, controllers.user)

// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router.post('/upload', controllers.upload)

// --- 信道服务接口 Demo --- //
// GET  用来响应请求信道地址的
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// --- 客服消息接口 Demo --- //
// GET  用来响应小程序后台配置时发送的验证请求
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)
// GET 获取用户信息
router.get('/userInfo', controllers.userInfo)
//POST 上传贴子
router.post('/updatePost',controllers.updatePost)
//GET获取贴子
router.get('/getPost', controllers.getPost)
//POST 发表评论
router.post('/updateComment', controllers.updateComment)
//GET获取评论
router.get('/getComment', controllers.getComment)
//GET获取全部贴子
router.get('/getAllPost', controllers.getAllPost)
//GET按照分类获取贴子
router.get('/getClassPost', controllers.getClassPost)
//GET获取我的贴子
router.get('/getMypost', controllers.getMypost)
//GET获取我的评论
router.get('/getMycomment', controllers.getMycomment)
//POST 增加点赞
router.post('/updatelike', controllers.updatelike)
//POST 取消点赞
router.post('/updateDroplike', controllers.updateDroplike)
//GET 获取点赞信息
router.get('/getlike', controllers.getlike)
//GET 获取所有点赞信息
router.get('/getAllLike', controllers.getAllLike)
//GET 获取头像信息
router.get('/getAvatar', controllers.getAvatar)
router.post('/updateAvatar', controllers.updateAvatar)
module.exports = router
