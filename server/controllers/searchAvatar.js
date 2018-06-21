const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let uid = ctx.query.uid

  let iavatar = await mysql("user").where({ uid })
  ctx.state.data = {
    iavatar: iavatar,
  }
}