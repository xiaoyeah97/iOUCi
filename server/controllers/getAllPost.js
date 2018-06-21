const { mysql } = require('../qcloud')

module.exports = async ctx => {

  let post_detials = await mysql.raw('SELECT pid,classify,date,textwords,textphoto,name,iavatar FROM post,nickname,user WHERE nickname.nid=post.nid AND post.uid=user.uid ORDER BY date DESC')

  //let comment_num = await mysql.raw('SELECT COUNT(*),pid FROM comment GROUP BY pid')
  // let comment_num = await mysql('comment').count('cid as c').groupBy('pid').select('pid')
  // let like_num = await mysql('like').count('lid as l').groupBy('pid')
  ctx.state.data = {
    post_detials: post_detials[0],
  }
}