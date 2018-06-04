const { mysql } = require('../qcloud')

module.exports = async ctx=> {

  let nid = ctx.query.nid ? ctx.query.nid : ''
  let times = ctx.query.times ? ctx.query.times : ''

  var res = await mysql.raw('SELECT nid FROM nickname WHERE times in ( SELECT MIN(times) FROM nickname GROUP BY times) ORDER BY nid LIMIT 1')
 


  ctx.state.data = {
    res: res[0] //为什么取一项？？0是有效 1是无效？
  }

}