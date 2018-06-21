const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let uid = ctx.query.uid ? ctx.query.uid : -1
  let post_detials = await mysql.raw('SELECT pid,classify,date,textwords,textphoto,name,iavatar FROM post,nickname,user WHERE nickname.nid=post.nid AND post.uid=user.uid AND post.uid=? ORDER BY date DESC',[uid])

  ctx.state.data = {
    post_detials: post_detials[0],
  }
}