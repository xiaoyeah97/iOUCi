const { mysql } = require('../qcloud')

module.exports = async ctx => {

  let comment_detials = await mysql.raw('SELECT time,text_comm,nickname,avatar_url FROM comment,nickname,user WHERE nickname.nid=comment.nid AND comment.uid=user.uid')

  ctx.state.data = {
    comment_detials: comment_detials,
  }
}