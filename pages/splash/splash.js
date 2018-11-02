// pages/splash/splash.js
let constant = require('../../utils/constant.js')
let app = getApp()
let showTime = 3000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: `${constant.mobileDomain}/static/images/wechat/splash.png`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //隐藏转发
    wx.hideShareMenu({})
  },
  getUserInfo() {
    if (app.globalData.userInfo) {
      setTimeout(() => {
        // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
        wx.switchTab({
          url: '/pages/weather/home/home'
        })
      }, showTime)
      wx.getUserInfo({
        success: (res) => { 
          app.globalData.userInfo = res.userInfo
        },
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})