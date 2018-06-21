const { mysql } = require('../qcloud')
//const app = getApp()
module.exports = async ctx => {
  let text_comm = ctx.request.body.text_comm
  let uid = ctx.request.body.uid
  let nid 
  let pid = ctx.request.body.pid
  let time = ctx.request.body.time
  let post = await mysql("post").where({ pid }).first()
  //let num = await mysql("nickname").count('nid')
  //let uid_pid = post.uid
  if(post.uid==uid){
    nid = post.nid
  }
  else{
    nid = Math.floor(Math.random() * 100 + 1)}
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