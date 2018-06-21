const { mysql } = require('../qcloud')
//const app = getApp()
module.exports = async ctx => {
  let classify = ctx.request.body.classify 
  let textwords = ctx.request.body.textwords 
  let textphoto = ctx.request.body.textphoto 
  let content_num = ctx.request.body.content_num 
  let like_num = ctx.request.body.like_num 
  let date = ctx.request.body.date ? ctx.request.body.date : ''
  let uid = ctx.request.body.uid ? ctx.request.body.uid : ''
  //let num = await mysql("nickname").count('nid')

  //let nid = ctx.query.nid ? ctx.query.nid : ''
  //let times = ctx.query.times ? ctx.query.times : ''
  //let length = await mysql("nickname").count("nid")
  let nid = Math.floor(Math.random() *100+1)
  //let resnid = await mysql.raw('SELECT nid FROM nickname WHERE times in ( SELECT MIN(times) FROM nickname GROUP BY times) ORDER BY nid LIMIT 1')
    let post ={
      classify: classify,
      textwords: textwords,
      textphoto: textphoto,
      content_num: content_num,
      like_num: like_num,
      date: date,
      uid: uid,
      nid: nid
    }

    let res = await mysql("post").insert(post)



  //ctx.state.data = "data"
  ctx.state.data = {
    //resnid: resnid[0],//为什么取一项？？0是有效 1是无效？
    res: res
  }
  
}