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
    comments: {},
    //pid: ''
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
        for (let item in data) {
          // 处理时间格式
          data[item].date = util.formatTime(new Date(data[item].date))
        }
        this.setData({
          post_detials: data.post_detials,
        })
      },
    })
  },
  toDetials:function(e){
    let pid = e.currentTarget.dataset.pid
    console.log(pid)
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