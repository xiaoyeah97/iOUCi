const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let pid = ctx.query.pid
  let uid = ctx.query.uid
  //let likes = await mysql.raw('SELECT lid FROM like WHERE pid=? AND uid=?', [pid,uid])
  let likes = await mysql("like").where({ pid,uid}).first()
  let like_state 
  if(likes != null){
    like_state=1
  }else{
      like_state=0
    }
  ctx.state.data={
    likes:likes,
    like_state:like_state
    }
}