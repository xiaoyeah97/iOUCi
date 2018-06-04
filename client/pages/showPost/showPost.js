// pages/showPost/showPost.js
var config = require('../../config')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    post_detials: {},
    nickname: {},
    comments: {},
    pid: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }
    this.setData({
      pid: options.pid
    })
    console.log(this.data.pid)
    wx.request({
      url: config.service.getPostUrl,
      method: 'get',
      data: {
        pid: this.data.pid,

      },
      success: res => {
        console.log(res)
        let data = res.data.data
        this.setData({
          
          userInfo: data.userInfo,
          post_detials: data.post_detials,
          nickname: data.nickname
        })  
    },
    })
  },

  showComment: function(){
  wx.navigateTo({
    url: '../showComment/showCommet?pid=' + pid + '&type=' + 0,
  })
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