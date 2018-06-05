// pages/post/post.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: '',
    textwords: '',
    textphoto: '',
    uid: '',
    nid: '',
    date: '',
    content_num: 0,
    like_num: 0,
    times: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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


  // 上传图片接口
  doUpload: function () {
    var that = this

    // 选择图片 
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        util.showBusy('正在上传')
        var filePath = res.tempFilePaths[0]

        // 上传图片
        wx.uploadFile({
          url: config.service.uploadUrl,
          filePath: filePath,
          name: 'file',

          success: function (res) {
            util.showSuccess('上传图片成功')
            console.log(res)
            res = JSON.parse(res.data)
            console.log(res)
            that.setData({
              textphoto: res.data.imgUrl
            })
          },

          fail: function (e) {
            util.showModel('上传图片失败')
          }
        })

      },
      fail: function (e) {
        console.error(e)
      }
    })
  },

  // 预览图片
  previewImg: function () {
    wx.previewImage({
      current: this.data.image,
      urls: [this.data.image]
    })
  },
  
  // settimes:function(){
  //   wx.request({
  //     url: config.service.setNickname_timeUrl,
  //     method: 'post',
  //     data:{
  //       times:this.data.times
  //     },
  //     success:res => {
  //       console.log(res)
  //       let data = res.data.data
  //       this.setData({
  //         times: data
  //       })
  //     }
  //   })
  // },

  // getNickname: function(){
  //   wx.request({
  //     url: config.service.getNicknameUrl,
  //     method: 'get',
  //     data:{
  //       nid: this.data.nid,
  //       //times: this.data.nickname.times
  //     },
  //     success: res => {
  //       console.log(res)
  //       let data = res.data.data
  //       this.setData({
  //         nid: data
  //       })
  //     }
  //   })
  // },


  updatePost: function(){
    util.showBusy('正在上传')
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    }
    console.log(this.data.nid)
    let date = util.formatTime(new Date())
    console.log(date)
    wx.request({
      url: config.service.updatePostUrl,
      method: 'post',
      data: {
        classify: this.data.classify,
        textwords: this.data.textwords,
        textphoto: this.data.textphoto,
        content_num: 0,
        like_num: 0,
        //nid: nid,
        date: date,
        uid:uid
      },
      success: res => {
        console.log(res.data.data.res[0])
        if (res.data.code == 0) {
          util.showSuccess('上传信息成功')
          let pid = res.data.data.res[0]
          
          wx.redirectTo({
            url: '../showPost/showPost?pid=' + pid + '&type=' + 0,
          })
        } else {
          util.showModel('上传信息失败', res.data.error)
        }
      }
    })
  },

  backtoSqare: function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },

  inputclassify: function (e) {
    this.data.classify = e.detail.value
  },
  inputtextwords: function (e) {
    this.data.textwords = e.detail.value
  }, 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})