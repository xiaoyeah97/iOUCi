const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let uid = ctx.query.uid ? ctx.query.uid : -1
  let comments = await mysql.raw('SELECT pid,iavatar, name, time, text_comm FROM comment, user ,nickname WHERE comment.uid = user.uid AND comment.nid = nickname.nid AND comment.uid = ? ORDER BY time DESC', [uid])

  ctx.state.data = comments
}