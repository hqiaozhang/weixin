// pages/about/introduce/introduce.js
let app = getApp()
let constant = require('../../../utils/constant.js')
let equipmentApi = require('../../../apis/equipment_api.js')
let apiUtil = require('../../../apis/api_util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    webUrl: '',
    equipmentId: ''
  },

  loadSuccess(event) {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(params) {
    constant.showLoading()
    if (app.globalData.openId) {
      this.setData({
        webUrl: `${constant.mobileDomain}/indoor.html?equipmentId=${params.equipmentId}&domainId=${app.globalData.district}&openId=${app.globalData.openId}`,
        equipmentId: params.equipmentId
      })
    } else {
      app.loginCallback = (loginResult) => {
        this.setData({
          webUrl: `${constant.mobileDomain}/indoor.html?equipmentId=${params.equipmentId}&domainId=${app.globalData.district}&openId=${app.globalData.openId}`,
          equipmentId: params.equipmentId
        })
      }
    }
    //查询设备状态
    let options = {
      ...equipmentApi.checkEquipment
    }
    options.showLoading = false
    options.url = `${options.url}?equipmentId=${params.equipmentId}&openId=${app.globalData.openId}`
    apiUtil.urlRequest(options,
      (result) => {
        //如果没有共享
        if (result.shared != 1) {
          if (result.self != 1) {
            //不是自己的无权查看
            wx.redirectTo({
              url: '/pages/scan/result/result?preType=3',
            })
          } else {
            //是自己的隐藏转发
            wx.hideShareMenu({})
          }
        }
      })
  },

  updateData() {
    let now = new Date().getTime()
    this.setData({
      webUrl: `${constant.mobileDomain}/indoor.html?t=${now}&equipmentId=${this.data.equipmentId}&domainId=${app.globalData.district}&openId=${app.globalData.openId}`
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
    return {
      title: constant.shareTitle
    }
  }
})