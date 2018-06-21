const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let pid = ctx.query.pid

  let likes = await mysql("like").where({pid})
  ctx.state.data = {
    likes: likes,
  }
}