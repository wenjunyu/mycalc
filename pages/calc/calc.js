//calc.js
//获取应用实例
//计算小程序 by wenjun

var high_text = '高'
var width_text = '宽'

var value = 0
var inputhighValue = 0
var inputwidthValue = 0

Page({
  data: {
    high: high_text,
    width: width_text,
    inputhighValue: 0,
    inputwidthValue: 0 ,
    OutsideHighValue: 0,
    OutsidewidthValue: 0,
    insideHigtValue: 0 ,
    insidewidthValue: 0,
    Fixedhigh: 0,
    Fixedwidth: 0,
    UnFixedhigh: 0,
    UnFixedwidth: 0
  },
  calc_result: function (e) {
    var high_value = parseInt(this.data.inputhighValue) ;
    var width_value =  parseInt(this.data.inputwidthValue);
    console.log(value)
    this.setData({
      OutsideHighValue: high_value - 36,
      OutsidewidthValue: width_value - 36,
      insideHigtValue: (high_value + 24) / 3,
      insidewidthValue: width_value - 39,
      Fixedhigh: (width_value - 20),
      Fixedwidth:((high_value + 24) / 3 - 12),
      UnFixedhigh: (width_value - 80),
      UnFixedwidth: ((high_value + 24) / 3 - 42)

    })
  },
  bindKeyInputHigh: function (e) {
    this.setData({
      inputhighValue: e.detail.value
    })
  },
  bindKeyInputWidth: function (e) {
    this.setData({
      inputwidthValue: e.detail.value
    })
  },

})