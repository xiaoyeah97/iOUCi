// pages/sqare/sqare.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    post_detials: {},
    nickname: {},
    post_classify:{},
    newComments:null
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  // onTapTag: function (e) {
  //   var self = this;
  //   var tab = e.currentTarget.id;
  //   // 这里就能获取到不同的tab值了
  //   self.setData({
  //     tab: tab
  //   });
  //   if (tab !== 'all') {
  //     this.fetchData({ tab: tab });
  //   } else {
  //     this.fetchData();
  //   }
  // },
  onLoad: function (options) {
    console.log(this.data.newComments)
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }
    //console.log(this.data.pid)
    //显示贴子
    wx.request({
      url: config.service.getAllPostUrl,
      method: 'get',
      // data: {
      //   pid: this.data.pid,
      // },
      success: res => {
        console.log(res)
        //console.log(res.data.data.post_detials)
        let data = res.data.data
        for (let item in data.post_detials) {
          data.post_detials[item].date = util.formatTime(new Date(data.post_detials[item].date))
        }
        console.log(data.post_detials.date)
        //console.log(data.comment_num[1])
        this.setData({
          post_detials: data.post_detials,
          // comment_num: data.comment_num,
          // like_num:data.like_num
        })
      },
    })
  },
refresh:function(){
  let uid
  if (app.globalData.userInfo) {
    uid = app.globalData.userInfo.uid
  }
    wx.request({
      url: config.service.getAllPostUrl,
      method: 'get',
      // data: {
      //   pid: this.data.pid,
      // },
      success: res => {
        console.log(res)
        //console.log(res.data.data.post_detials)
        let data = res.data.data
        for (let item in data.post_detials) {
          data.post_detials[item].date = util.formatTime(new Date(data.post_detials[item].date))
        }
        console.log(data.post_detials.date)
        this.setData({
          post_detials: data.post_detials,
        })
      },
    })

    wx.request({
      url: config.service.getNewMessageUrl,
      method:'get',
      data:{
        uid:uid
      },
      success: res => {
        console.log(res)
        if (res.data.data.comments.length!=0){        
        this.setData({
          newComments: res.data.data.comments
        })}
        }
    })
  },
  toNewMessage:function(e){
    
    wx.navigateTo({
      url: '../newMessage/newMessage',
    })
  },

  toDetials:function(e){
    let pid = e.currentTarget.dataset.pid
    console.log(pid)
    wx.navigateTo({
      url: '../showPost/showPost?pid=' + pid + '&type=' + 0,
    })
  },
  tocomment: function(e){
    let pid = e.currentTarget.dataset.pid
    wx.navigateTo({
      url: '../comment/comment?pid=' + pid + '&type=' + 0,
    })  
  },
  tolike: function(e){
    let pid = e.currentTarget.dataset.pid
    let uid 
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }

    wx.request({
      url: config.service.updatelikeUrl,
      method:'post',
      data:{
        pid: pid,
        uid: uid
      },
      success: res=>{
        console.log(res)
      }
    })

    wx.request({
      url: config.service.getlikeUrl,
      method:'get',
      data: {
        pid: pid,
        uid: uid
      },
      success: res => {
        console.log(res)
      }
    })
  },
toclassify(e){
  let classify = e.currentTarget.dataset.classify
  wx.navigateTo({
    url: '../postClassify/postClassify?classify=' + classify + '&type=' + 0,
  })
},
onGotUserInfo: function (e) {
  console.log(e.detail.errMsg)
  console.log(e.detail.userInfo)
  console.log(e.detail.rawData)
},



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      newComments: null
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})