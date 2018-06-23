const { mysql } = require('../qcloud')
module.exports = async ctx => {
  let cid = ctx.request.body.cid
  let state = 1
  let res = await mysql("comment").where({cid}).update({state})
  ctx.state.data = res
}