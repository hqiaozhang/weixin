// pages/about/introduce/introduce.js
let constant = require('../../../utils/constant.js')
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl: ''
  },

  loadSuccess(event) {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //隐藏转发
    wx.hideShareMenu({})
    constant.showLoading()
    this.setData({
      webUrl: `${constant.mobileDomain}/outdoor.html?domainId=${app.globalData.district}&openId=${app.globalData.openId}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})