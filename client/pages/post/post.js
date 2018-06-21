// pages/post/post.js
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    classify: '',
    textwords: '',
    textphoto: '',
    uid: '',
    nid: '',
    date: '',
    content_num: 0,
    like_num: 0,
    times: 0,
    classifyArray:[
      "找人/表白",
      "寻物/招领",
      "建议/吐槽",
      "问询/咨询"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo.iavatar ==null) {
      //console.log(res.data.data.userInfo.iavatar)
      wx.navigateTo({
        url: '../chooseGender/chooseGender',
      })
    }
  
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


  // chooseImage: function (e) {
  //   var that = this;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  //     success: function (res) {
  //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
  //       that.setData({
  //         textphoto: that.data.textphoto.concat(res.tempFilePaths)
  //       });
  //     }
  //   })
  // },
  chooseImage: function () {
    var that = this
    
    // 选择图片
    wx.chooseImage({
      count: 1,
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
            //console.log(this.data.textphoto)
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
  // previewImage: function (e) {
  //   wx.previewImage({
  //     current: e.currentTarget.id, // 当前显示图片的http链接
  //     urls: this.data.textphoto // 需要预览的图片http链接列表
  //   })
  // },
  previewImage: function (e) {
    //console.log(this.data.textphoto)
    wx.previewImage({
      current: e.currentTarget.id,
      urls: [this.data.textphoto]
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
    console.log(this.data.textwords)
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
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          util.showModel('上传信息失败', res.data.error)
        }
      }
    })
  },

  backtoSqare: function(){
    wx.redirectTo({
      url: '../index/index'+0,
    })
  },
  classifyPicker: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
      this.data.classify=e.detail.value
      this.setData({
        index: e.detail.value
      })
  },
  inputtextwords: function (e) {
    //console.log(e.detail.value)
    this.data.textwords = e.detail.value
    //console.log(this.data.textwords)
  }, 

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})