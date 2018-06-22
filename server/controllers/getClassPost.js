const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let classify = ctx.query.classify
  let post_detials = await mysql.raw('SELECT pid,date,textwords,textphoto,name,iavatar FROM post,nickname,user WHERE nickname.nid=post.nid AND post.uid=user.uid AND classify=? ORDER BY date DESC',[classify])

  ctx.state.data = {
    post_detials: post_detials[0],
  }
}