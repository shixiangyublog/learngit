//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.png', 
      '/images/swiper02.png',
      '/images/swiper03.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
   
  }
})
