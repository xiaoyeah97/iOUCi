const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let pid = ctx.query.pid ? ctx.query.pid : -1
  let comments = await mysql.raw('SELECT iavatar, name, time, text_comm FROM comment, user ,nickname WHERE comment.uid = user.uid AND comment.nid = nickname.nid AND pid = ? ORDER BY time DESC', [pid])

  ctx.state.data = comments
}