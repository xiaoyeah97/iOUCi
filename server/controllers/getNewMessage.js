const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let uid = ctx.query.uid ? ctx.query.uid : -1
  let comments = await mysql.raw('SELECT cid,comment.pid,user.iavatar, name, comment.time, text_comm,state FROM comment, user ,nickname,post WHERE comment.uid = user.uid AND state=0 AND comment.nid = nickname.nid AND comment.pid=post.pid AND post.uid = ? ORDER BY time DESC', [uid])
  // let comments_read=await mysql.raw('SELECT comment.pid,user.iavatar, name, comment.time, text_comm,state FROM comment, user ,nickname,post WHERE comment.uid = user.uid AND state=1 AND comment.nid = nickname.nid AND post.uid = ? ORDER BY time DESC', [uid])
  ctx.state.data ={
    comments:comments[0],
    //comments_read:comments_read[0]
  }
}