const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let pid = ctx.query.pid ? ctx.query.pid : -1

  let post_detials = await mysql("post").where({ pid }).first()
  let uid = post_detials.uid
  let nid = post_detials.nid
  let userInfo = await mysql("user").where({ uid }).first()
  let nickname = await mysql("nickname").where({ nid }).first()
  
  ctx.state.data ={
    post_detials: post_detials,
    userInfo: userInfo,
    nickname: nickname
  }
}