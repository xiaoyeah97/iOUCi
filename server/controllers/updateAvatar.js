const { mysql } = require('../qcloud')
module.exports = async ctx => {
  let iavatar = ctx.request.body.iavatar
  let gender = ctx.request.body.gender
  let uid = ctx.request.body.uid
  let res =  await mysql("user").where({uid}).update({gender,iavatar})
  //let res = await mysql("avatar").insert(avatar)
  if (res) {
    ctx.state.data = "success"
  } else {
    ctx.state.code = -1
    ctx.state.data = "error"
  }
  //ctx.state.data = res
}