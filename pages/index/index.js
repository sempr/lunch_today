//index.js

const random = require("../../utils/random");

//获取应用实例
const app = getApp();

Page({
  data: {
    goods: [],
    bads: [],
    offset: 0,
  },
  randomData: function (seed) {
    wx.request({
      url: "https://lunch.ebincr.com/lunch.json",
      success: (res) => {
        let o = random.randomFour(res.data.length, seed);
        let data = res.data;
        this.setData({
          goods: [data[o[0]], data[o[1]]],
          bads: [data[o[2]], data[o[3]]],
        });
      },
    });
  },
  lucky: function () {
    this.randomData(new Date().getTime());
  },
  fetchData: function () {
    this.setData({ offset: 0 });
    this.randomData(new Date().getTime() / 86400 / 1000);
  },
  fetchOffset: function (offset) {
    this.randomData(new Date().getTime() / 86400 / 1000 + offset);
  },
  fetchNext: function () {
    this.fetchOffset(this.data.offset+1);
    this.setData({ offset: this.data.offset + 1 });
  },
  fetchPrev: function () {
    this.fetchOffset(this.data.offset-1);
    this.setData({ offset: this.data.offset - 1 });
  },
  onLoad: function () {
    this.fetchData();
  },
});
