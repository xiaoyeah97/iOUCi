const { mysql } = require('../qcloud')

module.exports = async ctx => {

  let post_detials = await mysql.raw('SELECT pid,classify,date,textwords,textphoto,name,avatar FROM post,nickname,user WHERE nickname.nid=post.nid AND post.uid=user.uid ORDER BY date DESC')

  ctx.state.data = {
    post_detials: post_detials[0],
  }
}