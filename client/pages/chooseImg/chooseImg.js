// pages/chooseImg/chooseImg.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    gender:0,
    iavatar:'',
    iavatar_group:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    this.setData({
      gender: options.gender,
      userInfo: app.globalData.userInfo
      //uid: uid
    })
    //console.log(this.data)

    wx.request({
      url: config.service.getAvatarUrl,
      data: {
        gender: this.data.gender,
        //iavatar_group: this.data.iavatar_group
      },
      method: 'GET',
      success: res => {
        console.log(res)
        this.setData({
          iavatar_group:res.data.data.iavatar_group
        })
        //this.data.iavatar_group = res.data.data.iavatar_group
      },
    })
  },


getImg:function(e){
  let iavatar = e.currentTarget.dataset.iavatar
  this.setData({
    iavatar: iavatar
  })
  console.log(this.data.iavatar)
},

updateImg:function(){
  wx.request({
    url: config.service.updateAvatarUrl,
    method: 'post',
    data:{
      gender:this.data.gender,
      iavatar: this.data.iavatar,
      uid:this.data.userInfo.uid
    },
    success: res =>{
      console.log(res)
      wx.navigateBack({
        delta:2
      })
    }
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