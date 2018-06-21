const { mysql } = require('../qcloud')
module.exports = async ctx => {
  let uid = ctx.request.body.uid
  let res = await mysql("like").where({uid}).del()
  ctx.state.data = res
}