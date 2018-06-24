// pages/newMessage/newMessage.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newComments:{},
    Comments_read:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }
    wx.request({
      url: config.service.getNewMessageUrl,
      method: 'get',
      data: {
        uid: uid
      },
      success: res => {
        console.log(res)
        this.setData({
          newComments: res.data.data.comments,
          //Comments_read: res.data.data.comments_read
        })
      }
    })
  },
  toDetials: function (e) {
    let pid = e.currentTarget.dataset.pid
    let cid = e.currentTarget.dataset.cid
    console.log(pid)
    console.log(cid)
    wx.request({
      url: config.service.setStateUrl,
      method:'post',
      data:{
        cid:cid
      },
      success: res=>{
      console.log(res)
      }
    })
    wx.navigateTo({
      url: '../showPost/showPost?pid=' + pid + '&type=' + 0,
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