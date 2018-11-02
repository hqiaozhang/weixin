// pages/about/introduce/introduce.js
let constant = require('../../../utils/constant.js')
let commonApi = require('../../../apis/common_api.js')
let apiUtil = require('../../../apis/api_util.js')
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
    this.updateData()
  },

  updateData() {
    let timestamp = (new Date()).getTime();
    //处理首页url
    if (app.globalData.district) {
      this.setData({
        webUrl: `${constant.mobileDomain}/home.html?t=${timestamp}&openId=${app.globalData.openId}&domainId=${app.globalData.district}`
      }, () => {
        console.log('home url,', this.data.webUrl)
      })
    } else {
      app.getDistrictCallback = (res) => {
        this.setData({
          webUrl: `${constant.mobileDomain}/home.html?t=${timestamp}&openId=${app.globalData.openId}&domainId=${res.district}`
        }, () => {
          console.log('home url,', this.data.webUrl)
        })
      }
    }
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
    //获取用户信息
    if (app.globalData.openId) {
      this.setRefresh()
    } else {
      app.loginCallback = (res) => {
        this.setRefresh()
      }
    }
  },

  setRefresh() {
    let options = {
      ...commonApi.setRefresh
    }
    options.url = `${options.url}?openId=${app.globalData.openId}`
    apiUtil.urlRequest(options)
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