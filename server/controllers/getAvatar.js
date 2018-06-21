const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let gender = ctx.query.gender

  let iavatar_group = await mysql("avatar").where({ gender })
  ctx.state.data = {
    iavatar_group: iavatar_group,
  }
}