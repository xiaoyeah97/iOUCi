const { mysql } = require('../qcloud')
module.exports = async ctx => {
  let pid = ctx.request.body.pid
  let uid = ctx.request.body.uid
  let like ={
    pid: pid,
    uid: uid
  }
  let res = await mysql("like").insert(like)
  ctx.state.data = res
}