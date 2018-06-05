const { mysql } = require('../qcloud')

module.exports = async ctx => {

  let post_detials = await mysql.select().table('post')

  ctx.state.data = {
    post_detials: post_detials,
  }
}