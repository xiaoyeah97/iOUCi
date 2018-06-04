const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let pid = ctx.query.pid ? ctx.query.pid : -1

  let comment_detials = await mysql("comment").where({ pid }).first()
  let uid = comment_detials.uid
  let nid = comment_detials.nid
  let userInfo = await mysql("user").where({ uid }).first()
  let nickname = await mysql("nickname").where({ nid }).first()

  ctx.state.data = {
    comment_detials: comment_detials,
    userInfo: userInfo,
    nickname: nickname
  }
}