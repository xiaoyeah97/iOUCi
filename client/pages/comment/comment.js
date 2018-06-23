// pages/comment/comment.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid : -1,
    text_comm : '',
    uid : '',
    nid : '',
    time : 0,
    userInfo:{}
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo.iavatar == null) {
      console.log(res.data.data.userInfo.iavatar)
      wx.navigateTo({
        url: '../chooseGender/chooseGender',
      })
    }
    this.setData({
      pid: options.pid
    })
    console.log(this.data.pid)
  },


  updateComment: function (options) {
    util.showBusy('正在上传')
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
      console.log(uid)
      this.data.uid = uid
    }


    //console.log(this.data.nid)
    let time = util.formatTime(new Date())
    //console.log(date)
    wx.request({
      url: config.service.updateCommentUrl,
      method: 'post',
      data: {
        text_comm: this.data.text_comm,
        uid :this.data.uid,
        pid : this.data.pid,
        time : time
      },

      success: res => {
        console.log(res)
        console.log(this.data)
        if (res.data.code == 0) {
          util.showSuccess('评论成功')
          let pid = this.data.pid
          wx.redirectTo({
            url: '../showPost/showPost?pid=' + pid + '&type=' + 0,
          })
        } else {
          util.showModel('评论失败或服务器异常，请重试', res.data.error)
        }
      }
    })
  },



  inputtextwords: function (e) {
    //console.log(e.detail.value)
    this.data.text_comm = e.detail.value
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