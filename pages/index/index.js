//index.js

const random = require("../../utils/random");

//获取应用实例
const app = getApp();

Page({
  data: {
    goods: [],
    bads: [],
  },
  lucky: function () {
    wx.request({
      url: "https://lunch.ebincr.com/lunch.json",
      success: (res) => {
        let o = random.randomFour(res.data.length, (new Date()).getTime());
        let data = res.data;
        this.setData({
          goods: [data[o[0]], data[o[1]]],
          bads: [data[o[2]], data[o[3]]],
        });
      },
    });
  },
  fetchData: function () {
    wx.request({
      url: "https://lunch.ebincr.com/lunch.json",
      success: (res) => {
        let o = random.randomFour(res.data.length, (new Date()).getTime()/86400000);
        let data = res.data;
        this.setData({
          goods: [data[o[0]], data[o[1]]],
          bads: [data[o[2]], data[o[3]]],
        });
      },
    });
  },
  onLoad: function () {
    this.fetchData();
  },
});
