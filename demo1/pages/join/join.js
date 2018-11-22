// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
  
  },
  tell: function(){
    wx.makePhoneCall({
      phoneNumber: '1340000' //仅为示例，并非真实的电话号码
    })
  },
  //send
  send: function () {
    var that=this;
    wx.request({
      url: 'https://www.tian0o0.top/api/now', //仅为示例，并非真实的接口地址
      method:'GET',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({ 
          result:res.data.data})
      }
    })
  },
  })