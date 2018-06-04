const { mysql } = require('../qcloud')

module.exports = async ctx => {

  //let time = ctx.request.time
  let nid = ctx.request.nid
  let times = ctx.request.times

  
  //let times = await mysql('nickname').update('times','times+1')

  ctx.state.data = {
    times: times 
  }

}