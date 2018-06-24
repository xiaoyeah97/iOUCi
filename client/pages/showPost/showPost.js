// pages/showPost/showPost.js
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
    comments: '',
    pid: -1,
    uid:-1,
    like_state:0,
    likes: {}
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
      pid: options.pid,
      uid:uid
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
        for(let item in data){
        data[item].date = util.formatTime(new Date(data[item].date))
      }
        this.setData({          
          userInfo: data.userInfo,
          post_detials: data.post_detials,
          nickname: data.nickname
        })  
    },
    })

    wx.request({
      url: config.service.getCommentUrl,
      method: 'get',
      data:{
        pid:this.data.pid,
      },
      success: res => {
        //console.log(this.data.pid)
        console.log(res)
        let data = res.data.data[0]
        console.log(data)
        this.setData({
          comments:data
        })
      }
    })
    wx.request({
      url: config.service.getlikeUrl,
      method: 'get',
      data: {
        pid: this.data.pid,
        uid: this.data.uid
      },
      success: res => {
        console.log(this.data)
        console.log(res)
        this.setData({
          like_state: res.data.data.like_state
        })
      }
    })
    wx.request({
      url: config.service.getAllLikeUrl,
      method:'get',
      data:{
        pid: this.data.pid,
      },
      success: res=>{
        console.log(res)
        this.setData({
          likes:res.data.data.likes
        })
      }
    })
  },
  
  toComment: function (e) {
    let pid = e.currentTarget.dataset.pid
    console.log(pid)
    wx.redirectTo({
      url: '../comment/comment?pid=' + pid + '&type=' + 0,
    })
  },
  tolike: function (e) {
    let pid = e.currentTarget.dataset.pid
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }

    wx.request({
      url: config.service.updatelikeUrl,
      method: 'post',
      data: {
        pid: this.data.pid,
        uid: uid
      },
      success: res => {
        console.log(res)
      }
    })

    wx.request({
      url: config.service.getlikeUrl,
      method: 'get',
      data: {
        pid: this.data.pid,
        uid: this.data.uid
      },
      success: res => {
        console.log(res)
        this.setData({
          like_state: res.data.data.like_state,
          //likes: res.data.data.likes
        })
      }
    })

    wx.request({
      url: config.service.getAllLikeUrl,
      method: 'get',
      data: {
        pid: this.data.pid,
      },
      success: res => {
        console.log(res)
        this.setData({
          likes: res.data.data.likes
        })
      }
    })
  },
  dellike: function(e){
    let pid = e.currentTarget.dataset.pid
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }

    wx.request({
      url: config.service.updateDroplikeUrl,
      method: 'post',
      data: {
        pid: this.data.pid,
        uid: uid
      },
      success: res => {
        console.log(res)
      }
    })

    wx.request({
      url: config.service.getlikeUrl,
      method: 'get',
      data: {
        pid: this.data.pid,
        uid: this.data.uid
      },
      success: res => {
        console.log(res)
        this.setData({
          like_state: res.data.data.like_state,
          //likes: res.data.data.likes
        })
      }
    })
    wx.request({
      url: config.service.getAllLikeUrl,
      method: 'get',
      data: {
        pid: this.data.pid,
      },
      success: res => {
        console.log(res)
        this.setData({
          likes: res.data.data.likes
        })
      }
    })
  },

  previewImage: function (e) {
    //console.log(this.data.textphoto)
    wx.previewImage({
      current: e.currentTarget.id,
      urls: [this.data.post_detials.textphoto]
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