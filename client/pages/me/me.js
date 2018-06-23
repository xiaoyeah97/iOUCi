// pages/me/me.js
var config = require('../../config')

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  changeImg: function(e){
    let gender = e.currentTarget.dataset.gender
    wx.navigateTo({
      url: '../chooseImg/chooseImg?gender=' + gender + '&type=' + 0,
    })
  },

  tomypost:function(){
    wx.navigateTo({
      url: '../mypost/mypost',
    })
  },
  tomycomment: function () {
    wx.navigateTo({
      url: '../mycomment/mycomment',
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
    if (app.globalData.userInfo) {
      //console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
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
    if (app.globalData.userInfo) {
      //console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
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