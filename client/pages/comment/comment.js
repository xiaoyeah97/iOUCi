// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid : -1,
    text_comm : '',
    uid : '',
    nid : '',
    time : 0
  },


  updateComment: function(options){
    util.showBusy('正在上传')
    let uid
    if (app.globalData.userInfo) {
      uid = app.globalData.userInfo.uid
    } 

    this.setData({
      pid: options.pid
    })

    //console.log(this.data.nid)
    let time = util.formatTime(new Date())
    //console.log(date)
    wx.request({
      url: config.service.updateCommentUrl,
      method: 'post',
      data: {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})