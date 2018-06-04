// pages/showComment/showComment.js

var config = require('../../config')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    comment_detials: {},
    nickname: {},
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
    wx.request({
      url: config.service.getCommentUrl,
      method:'get',
      data: {
        pid: this.data.pid,
      },
      success: res => {
        console.log(res)
        let data = res.data.data
        this.setData({
          userInfo: data.userInfo,
          comment_detials: data.comment_detials,
          nickname: data.nickname
        })
      },
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