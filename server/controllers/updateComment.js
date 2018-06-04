const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let text_comm = ctx.request.body.text_comm
  let uid = ctx.request.body.uid
  //let nid = ctx.request.body.nid
  let pid = ctx.request.body.pid
  let time = ctx.request.body.time

  let nid = Math.floor(Math.random() * 3 + 1)

  let comment={
    text_comm : text_comm,
    uid : uid,
    pid : pid,
    time : time,
    nid : nid,
  }
  let res = await mysql("comment").insert(comment)

  ctx.state.data = {
    res: res
  }
}