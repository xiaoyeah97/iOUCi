// pages/postClassify/postClassify.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:'',
    post_detials:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      classify: options.classify
    })
    console.log(this.data.classify)
    wx.request({
      url: config.service.getClassPostUrl,
      method: 'get',
      data:{
        classify:this.data.classify
      },
      success: res => {
        console.log(res)
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
      // let post = this.data.post_detials
      // let postclassify
      // for (let item in post) {
      //   if (post[item].classify == this.data.classify) {
      //     postclassify[item] = post[item]
      //   }
      // }
      // this.data.post_classify=postclassify
      // //console.log(c)
      // console.log(this.data.post_classify)
  },
  toDetials: function (e) {
    let pid = e.currentTarget.dataset.pid
    console.log(pid)
    wx.navigateTo({
      url: '../showPost/showPost?pid=' + pid + '&type=' + 0,
    })
  },

  refresh: function () {
    wx.request({
      url: config.service.getClassPostUrl,
      method: 'get',
      data: {
        classify: this.data.classify,
      },
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