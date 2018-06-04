const { mysql } = require('../qcloud')


module.exports = async ctx => {
  let open_id = ctx.query.openId ? ctx.query.openId : ''
  let avatar = ctx.query.avatar ? ctx.query.avatar : ''
  let gender = ctx.query.gender ? ctx.query.gender : 0
  //let iavatar = ctx.query.iavatar ? ctx.query.iavatar: ''
  var res = await mysql("user").where({ open_id }).first()

  if (!res) {
    // 首次登陆，初始化用户信息
    let user = {
      open_id: open_id,
      avatar: avatar,
      gender: gender
    }
    await mysql("user").insert(user)
    res = await mysql("user").where({ open_id }).first()
  }

  ctx.state.data = {
    userInfo: res
  }
  

}